import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { BottomStackParamList } from "../navigation/BottomTabNav";

type bottomScreenNavigationType = NativeStackNavigationProp<
  BottomStackParamList,
  "AdminMenu"
>;

export default function AdminMenu() {
  const navigation = useNavigation<bottomScreenNavigationType>();
  const onBackPressed = () => {
    navigation.navigate("Parameter");
  };

  const onUsersListPressed = () => {
    navigation.navigate("UsersList");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onBackPressed}>
          <MaterialIcons name="arrow-back-ios" size={30} color={"#172B4D"} />
        </TouchableOpacity>
        <Text style={styles.title}>Menu Administrateur</Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.4}
          onPress={onUsersListPressed}
        >
          <Ionicons name="person-outline" size={20} color="#172B4D" />
          <Text style={{ fontSize: 19, marginLeft: 15 }}>
            Liste des Utilisateurs
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
          <MaterialIcons name="question-answer" size={20} color="#172B4D" />
          <Text style={{ fontSize: 19, marginLeft: 15 }}>
            Réponds aux questions
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
        <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
          <AntDesign name="database" size={20} color="#172B4D" />
          <Text style={{ fontSize: 19, marginLeft: 15 }}>
            Données de Connexion
          </Text>
        </TouchableOpacity>
        <View style={styles.line}></View>
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
  btn: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    padding: 20,
  },
  line: {
    height: 1,
    width: "60%",
    backgroundColor: "#e3e3e3",
    marginLeft: 75,
  },
});
