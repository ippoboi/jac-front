import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { BottomStackParamList } from "../navigation/BottomTabNav";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";
import ReminderComponent from "../components/ReminderComponent";
import SubscribeComponent from "../components/SubscribeComponent";

type bottomScreenNavigationType = NativeStackNavigationProp<
  BottomStackParamList,
  "Notifications"
>;

export default function Notifications() {
  const navigation = useNavigation<bottomScreenNavigationType>();
  const onBackPressed = () => {
    navigation.navigate("Feed");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPressed}>
          <MaterialIcons name="arrow-back-ios" size={30} color={"#172B4D"} />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <ScrollView>
        <View style={styles.notifContainer}>
          <Text style={styles.date}>Mercredi 8 juin</Text>
          <ReminderComponent />
          <Text style={styles.date}>Mercredi 7 juin</Text>
          <ReminderComponent />
          <SubscribeComponent />
          <Text style={styles.date}>Mercredi 6 juin</Text>
          <SubscribeComponent />
          <ReminderComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    marginLeft: 30,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    width: "75%",
    fontSize: 25,
    color: "#172B4D",
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  notifContainer: { alignItems: "center" },
  date: {
    fontSize: 17,
    color: "#0065ff",
    marginVertical: 20,
    fontWeight: "bold",
  },
});
