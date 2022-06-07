import axios from "../data/axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGIN_URL = "/auth/login";
const GET_TOKEN_INFO_URL = "auth/user";
const REGISTER_URL = "/user/register";
const LOGOUT_URL = "auth/logout";

export const AuthContext = createContext({
  isAuthentificated: false,
  login: (email: string, password: string) => console.error(),
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => console.error(),
  logout: () => console.error(),
  getUserId: (token: string) => console.error(),
  userInfos: {},
  getUserInfos: (id: number) => console.error(),
});

export default function AuthProvider({ children }: any) {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  const [userInfos, setUserInfos] = useState({});

  async function register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    axios
      .post(
        REGISTER_URL,
        JSON.stringify({ firstName, lastName, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        let userInfo = JSON.stringify(res.data);
      })
      .catch((e) => console.log(e));
  }

  async function login(email: string, password: string) {
    axios
      .post(
        LOGIN_URL,
        JSON.stringify({
          email,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        storeToken(res.data?.refresh_token);
        getUserId(res.data?.access_token);
        setIsAuthentificated(true);
      })
      .catch((e) => console.log(e));
  }

  async function getUserInfos(id: number) {
    await axios
      .get("user/" + id, {})
      .then((res) => {
        console.log(res.data);
        setUserInfos(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function getUserId(token: string) {
    if (token == null) return null;
    await axios
      .get(GET_TOKEN_INFO_URL, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        // console.log(res.data.id);
        getUserInfos(res.data.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async function logout() {
    const token = await retrieveToken();
    await axios
      .post(LOGOUT_URL, token, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setIsAuthentificated(false);
      })
      .catch((e) => {
        console.log(token);
        console.log(e);
      });
  }

  const storeToken = async (token: string) => {
    try {
      await AsyncStorage.setItem("refresh-token", token);
    } catch (e) {
      console.warn(e);
    }
  };

  const retrieveToken = async () => {
    try {
      const token = await AsyncStorage.getItem("refresh-token");
      return token;
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthentificated,
        login,
        register,
        getUserId,
        logout,
        userInfos,
        getUserInfos,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
