import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import React, { useState } from "react";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function LogOutComponent() {
  const [isModalVisible, setVisibility] = useState(false);

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
        <TouchableOpacity
          style={styles.cross}
          onPress={() => setVisibility(false)}
        >
          <Entypo name="cross" size={25} color="black" />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <TouchableOpacity>
            <Text style={styles.text}>Options</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
          <TouchableOpacity>
            <Text style={styles.text}>Déconnexion</Text>
          </TouchableOpacity>
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
    elevation: 5,
    position: "absolute",
    top: 6,
    backgroundColor: "white",
    width: "100%",
    height: "400%",
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
    height: "100%",
    // backgroundColor: "red",
    alignItems: "center",
  },
  line: {
    height: 20,
    borderBottomColor: "#DCDDE0",
    borderBottomWidth: 1,
  },
  text: {
    fontWeight: "bold",
    fontSize: 23,
  },
});
