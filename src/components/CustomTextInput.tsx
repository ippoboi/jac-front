import { StyleSheet, TextInput } from "react-native";
import React from "react";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  isPassword?: boolean;
  input?: any;
}

export default function CustomTextInput({
  value,
  onChangeText,
  placeholder,
  isPassword,
  input,
}: Props) {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={placeholder}
      placeholderTextColor={"#9A9FA7"}
      autoCorrect={false}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={onChangeText}
      autoCompleteType={input}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 270,
    padding: 5,
    marginLeft: 10,
    borderBottomWidth: 2,
    borderColor: "#DDDEE1",
    fontWeight: "700",
  },
});
