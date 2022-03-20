import React from "react";
import { LoginNavigator } from "./LoginNavigator";
import { useAuth } from "../context/AuthContext";
import { BottomTabNavigator } from "./BottomTabNav";

export default function AuthNavigator() {
  const { isAuthentificated } = useAuth();
  if (isAuthentificated) return <BottomTabNavigator />;
  return <LoginNavigator />;
}
