import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

interface Props {
  text: string;
  onPress: () => void;
}

export default function CustomButtonWoBorder({ text, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.Btn}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Btn: {
    color: "#1962D0",
    fontSize: 13,
    fontWeight: "700",
  },
});
