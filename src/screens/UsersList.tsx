import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Vibration,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import data from "../dataTestAccountProfile.json";
import UserAdminCardComponent from "../components/UserAdminCardComponent";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "UsersList"
>;

export default function UsersList() {
  const navigation = useNavigation<globalScreenNavigationType>();
  const onBackPressed = () => {
    navigation.navigate("AdminMenu");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPressed}>
          <MaterialIcons name="arrow-back-ios" size={30} color={"#172B4D"} />
        </TouchableOpacity>
        <Text style={styles.title}>Liste des Utilisateurs</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        {/* <FlatList
          data={data}
          renderItem={UserAdminCardComponent}
          keyExtractor={(item) => item.id}
          style={{ backgroundColor: "blue" }}
        /> */}
        <UserAdminCardComponent />
      </View>
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
    width: "85%",
    fontSize: 25,
    color: "#172B4D",
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
