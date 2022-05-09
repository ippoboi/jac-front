import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

interface Types {
  prop: string;
  field: string;
}

export default function ModifyInfoComp({ prop, field }: Types) {
  return (
    <View style={styles.lign}>
      <Text style={styles.prop}>{prop}</Text>
      <TextInput style={styles.field}>{field}</TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  lign: {
    marginLeft: 20,
    marginTop: 20,
    width: "75%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  prop: {
    color: "#444C6A",
    fontWeight: "bold",
    fontSize: 19,
  },
  field: {
    marginLeft: 20,
    color: "#C2C4C8",
    width: "80%",
    fontSize: 19,
    borderBottomColor: "#C2C4C8",
    borderBottomWidth: 1,
    fontWeight: "bold",
  },
});
