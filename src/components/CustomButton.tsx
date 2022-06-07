import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface Props {
  text: string;
  onPress: () => void;
}

export default function CustomButton({ text, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.Btn} onPress={onPress} activeOpacity={0.6}>
      <Text style={styles.Text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Btn: {
    borderRadius: 13,
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 10,
    backgroundColor: "#0065FF",
  },
  Text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
