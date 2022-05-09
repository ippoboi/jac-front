import axios from "../data/axios";
import React, { createContext, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LOGIN_URL = "/auth/login";
const GET_INFO_URL = "auth/user";
const REGISTER_URL = "/user/register";

export const AuthContext = createContext({
  isAuthentificated: false,
  login: (email: string, password: string) => console.error(),
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => console.error(),
  getUserInfo: () => console.error(),
});

export default function AuthProvider({ children }: any) {
  const [isAuthentificated, setIsAuthentificated] = useState(false);

  const register = (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => {
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
        console.log(userInfo);
      })
      .catch((e) => console.log(e));
  };
  const login = (email: string, password: string) => {
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
        console.log(JSON.stringify(res.data));
        AsyncStorage.setItem("token", JSON.stringify(res.data?.access_token));
        getUserInfo();
        setIsAuthentificated(true);
      })
      .catch((e) => console.log(e));
  };

  const getUserInfo = async () => {
    await axios
      .get(GET_INFO_URL, {
        headers: {
          Authorization: "Bearer " + AsyncStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthentificated, login, register, getUserInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
