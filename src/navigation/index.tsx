import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather, Ionicons, AntDesign    } from '@expo/vector-icons';

import LoginScreen from "../screens/LoginScreen";
import AccountScreen from "../screens/AccountScreen";
import FaqScreen from "../screens/FaqScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import React from "react";

export default function Navigation() {

    return(
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

type AuthStackParamList = {
    Login: undefined,
    NewPassword: undefined,
    SignUp: undefined,
    ForgotPassword: undefined,
    Root: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>();
function RootNavigator() {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
               <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
               <Stack.Screen
                    name="Root"
                    component={BottomTabNavigator}
                />   
                <Stack.Screen 
                    name="NewPassword"
                    component={NewPasswordScreen}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPasswordScreen}
                />  
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return(
        <BottomTab.Navigator initialRouteName="Feed" screenOptions={{headerShown: false}}>
            <BottomTab.Screen 
                name="Feed"
                component={NewsFeedScreen}
                options={{
                    tabBarShowLabel: false,
                    unmountOnBlur: true,
                    tabBarStyle: { height: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingRight: "10%", paddingLeft: "10%"},
                    tabBarIcon: ({size, color}) => 
                    <Feather 
                    name="home" 
                    size={size} 
                    color={color} />}}
            />
            <BottomTab.Screen 
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarShowLabel: false,
                    unmountOnBlur: true,
                    tabBarStyle: { height: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingRight: "10%", paddingLeft: "10%"},
                    tabBarIcon: ({size, color}) => 
                    <Ionicons 
                    name="person-outline" 
                    size={size} 
                    color={color} />
                }}
            />
            <BottomTab.Screen 
                name="Faq"
                component={FaqScreen}
                options={{
                    tabBarShowLabel: false,
                    unmountOnBlur: true,
                    tabBarStyle: { height: '10%', borderTopLeftRadius: 20, borderTopRightRadius: 20, paddingRight: "10%", paddingLeft: "10%"},
                    tabBarIcon: ({size, color}) => 
                    <AntDesign 
                    name="questioncircleo" 
                    size={size} 
                    color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}
