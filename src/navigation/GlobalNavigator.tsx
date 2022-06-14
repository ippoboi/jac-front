import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountEdit from "../screens/AccountEdit";
import AdminMenu from "../screens/AdminMenu";
import ChangePassword from "../screens/ChangePassword";
import EventCreate from "../screens/EventCreate";
import EventScreen from "../screens/EventScreen";
import FaqCreate from "../screens/FaqCreate";
import FaqScreen from "../screens/FaqScreen";
import Notifications from "../screens/Notifications";
import UsersList from "../screens/UsersList";
import { BottomTabNavigator } from "./BottomTabNav";

export type GlobalStackParamList = {
  AccountEdit: undefined;
  ChangePassword: undefined;
  FaqCreate: undefined;
  EventCreate: undefined;
  EventScreen: undefined;
  BottomTabNavigator: undefined;
  Feed: undefined;
  Faq: undefined;
  AdminMenu: undefined;
  Notifications: undefined;
  UsersList: undefined;

  EventCard: undefined;
  EventCardWoBM: undefined;
  EventCardSmallPassed: undefined;
  EventCardSmall: undefined;
  EventCardMed: undefined;
};

const Global = createNativeStackNavigator<GlobalStackParamList>();
export function GlobalNavigator() {
  return (
    <Global.Navigator screenOptions={{ headerShown: false }}>
      <Global.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Global.Screen name="EventCreate" component={EventCreate} />
      <Global.Screen name="EventScreen" component={EventScreen} />
      <Global.Screen name="AccountEdit" component={AccountEdit} />
      <Global.Screen name="AdminMenu" component={AdminMenu} />
      <Global.Screen name="UsersList" component={UsersList} />
      <Global.Screen name="Faq" component={FaqScreen} />
      <Global.Screen name="FaqCreate" component={FaqCreate} />
      <Global.Screen name="Notifications" component={Notifications} />
      <Global.Screen name="ChangePassword" component={ChangePassword} />
    </Global.Navigator>
  );
}
