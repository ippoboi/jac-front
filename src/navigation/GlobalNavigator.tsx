import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountEdit from "../screens/AccountEdit";
import ChangePassword from "../screens/ChangePassword";
import { BottomTabNavigator } from "./BottomTabNav";

export type GlobalStackParamList = {
  AccountEdit: undefined;
  ChangePassword: undefined;
  BottomTabNavigator: undefined;
};

const Global = createNativeStackNavigator<GlobalStackParamList>();
export function GlobalNavigator() {
  return (
    <Global.Navigator screenOptions={{ headerShown: false }}>
      <Global.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Global.Screen name="AccountEdit" component={AccountEdit} />
      <Global.Screen name="ChangePassword" component={ChangePassword} />
    </Global.Navigator>
  );
}
