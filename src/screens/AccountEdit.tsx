import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ModifyInfoComp from "../components/ModifyInfoComp";
import CustomButton from "../components/CustomButton";
import AccountScreen from "./AccountScreen";
import { Entypo } from "@expo/vector-icons";

export default function AccountEdit() {
  const [isModifyInfoVisible, setModifyInfoVisibility] = useState(true);

  if (!isModifyInfoVisible) {
    // return <AccountScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameCross}>
        <Text style={styles.title}>Mes informations</Text>
        <TouchableOpacity
          onPress={() => {
            setModifyInfoVisibility(false);
          }}
        >
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
        onPress={() => {
          setModifyInfoVisibility(false);
        }}
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
