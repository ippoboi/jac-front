import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";
import { BottomStackParamList } from "../navigation/BottomTabNav";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type bottomScreenNavigationType = NativeStackNavigationProp<
  BottomStackParamList,
  "Parameter"
>;

export default function ParamScreen() {
  const { logout, userInfos } = useAuth();
  const navigation = useNavigation<bottomScreenNavigationType>();

  const onFaqPressed = () => {
    navigation.navigate("Faq");
  };

  const onAdminMenu = () => {
    navigation.navigate("AdminMenu");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Paramètres</Text>
      </View>
      {userInfos?.role[0].roleLabel === "admin" && (
        <View>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.4}
            onPress={onAdminMenu}
          >
            <Ionicons name="person-outline" size={20} color="#172B4D" />
            <Text style={{ fontSize: 19, marginLeft: 15 }}>
              Menu Administrateur
            </Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
        </View>
      )}
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.4}
        onPress={onFaqPressed}
      >
        <FontAwesome5 name="question" size={20} color="#172B4D" />
        <Text style={{ fontSize: 19, marginLeft: 20 }}>
          Foire aux questions
        </Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
        <MaterialIcons name="question-answer" size={20} color="#172B4D" />
        <Text style={{ fontSize: 19, marginLeft: 16 }}>Pose ta question</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
        <Feather name="bell" size={20} color="#172B4D" />
        <Text style={{ fontSize: 19, marginLeft: 16 }}>Notifications</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
        <Feather name="shield" size={20} color="#172B4D" />
        <Text style={{ fontSize: 19, marginLeft: 16 }}>Confidentialité</Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
        <Feather name="download" size={20} color="#172B4D" />
        <Text style={{ fontSize: 19, marginLeft: 16 }}>
          Charte d'accès aux évènements
        </Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.4}>
        <Ionicons name="ios-newspaper-outline" size={20} color="#172B4D" />
        <Text style={{ fontSize: 19, marginLeft: 16 }}>
          Conditons Générales d'Utilisation
        </Text>
      </TouchableOpacity>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.btn} activeOpacity={0.4} onPress={logout}>
        <MaterialIcons name="logout" size={20} color="#172B4D" />
        <Text style={{ fontSize: 19, marginLeft: 16 }}>Déconnexion</Text>
      </TouchableOpacity>
      <Text
        style={{
          position: "absolute",
          bottom: "10%",
          marginLeft: "42%",
          marginBottom: 5,
          fontSize: 15,
          color: "#9f9f9f",
        }}
      >
        Ver. 9.7.0
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
  title: {
    fontSize: 30,
    color: "#172B4D",
    fontWeight: "700",
    paddingLeft: 30,
    paddingBottom: 40,
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
