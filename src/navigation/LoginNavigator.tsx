import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import React from "react";
import LoginScreen from "../screens/LoginScreen";

export type AuthStackParamList = {
  Login: undefined;
  NewPassword: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Root: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();
export function LoginNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
