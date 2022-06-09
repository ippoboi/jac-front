import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountEdit from "../screens/AccountEdit";
import ChangePassword from "../screens/ChangePassword";
import EventCreate from "../screens/EventCreate";
import FaqCreate from "../screens/FaqCreate";
import { BottomTabNavigator } from "./BottomTabNav";

export type GlobalStackParamList = {
  AccountEdit: undefined;
  ChangePassword: undefined;
  FaqCreate: undefined;
  EventCreate: undefined;
  BottomTabNavigator: undefined;
  Feed: undefined;
};

const Global = createNativeStackNavigator<GlobalStackParamList>();
export function GlobalNavigator() {
  return (
    <Global.Navigator screenOptions={{ headerShown: false }}>
      <Global.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Global.Screen name="EventCreate" component={EventCreate} />
      <Global.Screen name="AccountEdit" component={AccountEdit} />
      <Global.Screen name="FaqCreate" component={FaqCreate} />
      <Global.Screen name="ChangePassword" component={ChangePassword} />
    </Global.Navigator>
  );
}
