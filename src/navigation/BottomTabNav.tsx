import {
  AntDesign,
  EvilIcons,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import Feed from "../screens/Feed";

import ParamScreen from "../screens/ParamScreen";
import ProfilScreen from "../screens/ProfilScreen";

import YourEventsScreen from "../screens/YourEventsScreen";

export type BottomStackParamList = {
  Feed: undefined;
  YourEvents: undefined;
  Parameter: undefined;
  Profil: undefined;
  Account: undefined;
  Faq: undefined;
  FaqCreate: undefined;
  EventCreate: undefined;
  AccountEdit: undefined;
  ChangePassword: undefined;
};

const BottomTab = createBottomTabNavigator<BottomStackParamList>();
export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        unmountOnBlur: true,
        tabBarStyle: {
          height: "10%",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          overflow: "hidden",
          position: "absolute",
          paddingRight: "10%",
          paddingLeft: "10%",
        },
      }}
    >
      <BottomTab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="YourEvents"
        component={YourEventsScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Parameter"
        component={ParamScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Octicons name="gear" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
