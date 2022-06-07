import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import AccountScreen from "../screens/AccountScreen";
import FaqScreen from "../screens/FaqScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";

export type BottomStackParamList = {
  Feed: undefined;
  Account: undefined;
  Faq: undefined;
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
          paddingRight: "10%",
          paddingLeft: "10%",
        },
      }}
    >
      <BottomTab.Screen
        name="Feed"
        component={NewsFeedScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          tabBarBadge: "!",
        }}
      />
      <BottomTab.Screen
        name="Faq"
        component={FaqScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="questioncircleo" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
