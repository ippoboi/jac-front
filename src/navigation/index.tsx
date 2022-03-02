import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather, Ionicons, AntDesign    } from '@expo/vector-icons';

import LoginScreen from "../screens/LoginScreen";
import AccountScreen from "../screens/AccountScreen";
import FaqScreen from "../screens/FaqScreen";
import NewsFeedScreen from "../screens/NewsFeedScreen";

export default function Navigation() {

    return(
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator();
function RootNavigator() {

    return (
        <Stack.Navigator>
                    {/* <Stack.Screen
                        name="Root"
                        component={BottomTabNavigator}
                        options={{headerShown: false}}
                    /> */}
                    <Stack.Screen 
                        name="Login"
                        component={LoginScreen}
                    />
        </Stack.Navigator>
    )
}

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
    return(
        <BottomTab.Navigator initialRouteName="Feed">
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
