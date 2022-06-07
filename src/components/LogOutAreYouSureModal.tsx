import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function LogOutAreYouSureModal() {
  const [isModalVisible, setVisibility] = useState(false);

  const { logout } = useAuth();

  if (!isModalVisible) {
    return (
      <TouchableOpacity
        style={styles.btnAccount}
        onPress={() => setVisibility(true)}
      >
        <Ionicons name="person-outline" size={25} color="#172B4D" />
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={styles.modal}>
        <View style={styles.textContainer}>
          <View style={styles.btnFix}>
            <Text style={styles.text}>
              Etes-vous sûr de vouloir vous déconnecter ?
            </Text>
            <View style={styles.btHandle}>
              <TouchableOpacity onPress={() => logout()}>
                <Text style={styles.textOui}>Oui</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setVisibility(false)}>
                <Text style={styles.textAnnuler}>Annuler</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnAccount: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 13,
    borderColor: "#E6EAFB",
    borderWidth: 2,
    elevation: 5,
  },
  modal: {
    elevation: 12,
    position: "absolute",
    top: "500%",
    backgroundColor: "white",
    width: "100%",
    height: "600%",
    borderRadius: 20,
    borderColor: "#DCDDE0",
    borderWidth: 2,
  },
  cross: {
    paddingTop: 10,
    paddingRight: 10,
    alignItems: "flex-end",
  },
  textContainer: {
    height: "80%",
    alignItems: "center",
  },
  line: {
    height: 20,
    borderBottomColor: "#DCDDE0",
    borderBottomWidth: 1,
  },
  btnFix: {
    paddingTop: 40,
    alignItems: "center",
    height: "100%",
    elevation: 20,
    justifyContent: "space-between",
    // backgroundColor: "red",
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  textOui: {
    elevation: 200,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 23,
  },
  textAnnuler: {
    color: "#0065FF",
    fontWeight: "bold",
    fontSize: 23,
  },
  btHandle: {
    justifyContent: "space-between",
    height: "45%",
  },
});
