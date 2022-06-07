import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ModifyInfoComp from "../components/ModifyInfoComp";
import CustomButton from "../components/CustomButton";
import AccountScreen from "./AccountScreen";
import { Entypo } from "@expo/vector-icons";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "AccountEdit"
>;

export default function AccountEdit() {
  const navigation = useNavigation<globalScreenNavigationType>();

  const onQuitPress = () => {
    navigation.navigate("BottomTabNavigator");
    Alert.alert("", "Vos données ont été enregistées !");
  };

  const onCancelPress = () => {
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameCross}>
        <Text style={styles.title}>Mes informations</Text>
        <TouchableOpacity onPress={onCancelPress}>
          <Entypo name="cross" size={34} color="#172B4D" style={styles.cross} />
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 40 }}>
        <ModifyInfoComp prop={"Nom"} field={"BODIN"} />
        <ModifyInfoComp prop={"Prénom"} field={"Guillaume"} />
        <ModifyInfoComp prop={"Age"} field={"65"} />
        <ModifyInfoComp prop={"Tél."} field={"0745573829"} />
        <ModifyInfoComp prop={"Mail"} field={"guillaume-b@hotmail.com"} />
        <ModifyInfoComp prop={"Activité"} field={"Professeur des écoles"} />
      </View>
      <CustomButton
        text={"Enregistrer les modifications"}
        onPress={onQuitPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 10,
    alignItems: "center",
  },
  nameCross: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cross: {},
  title: {
    width: "85%",
    fontSize: 30,
    color: "#172B4D",
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
