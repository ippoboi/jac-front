import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  text: string;
  paragraph: string;
}

export default function faqComponent({ text, paragraph }: Props) {
  const [isOpen, setOpen] = useState(false);

  if (isOpen) {
    return (
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity
          style={styles.faqContainer}
          onPress={() => setOpen(false)}
          activeOpacity={0.8}
        >
          <View style={styles.titleContainer}>
            <AntDesign
              name="minus"
              size={20}
              color="#07DB00"
              style={{
                backgroundColor: "#D1FFD3",
                padding: 5,
                borderRadius: 30,
                bottom: 13,
              }}
            />
            <Text style={styles.title}>{text}</Text>
          </View>
          <Text style={styles.paragraph}>{paragraph}</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <TouchableOpacity
          style={styles.faqContainerClosed}
          onPress={() => setOpen(true)}
          activeOpacity={0.8}
        >
          <AntDesign
            name="plus"
            size={20}
            color="#DB00CC"
            style={{
              backgroundColor: "#FFD1FF",
              padding: 5,
              borderRadius: 30,
              bottom: 13,
            }}
          />
          <Text style={styles.titleClosed}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  faqContainerClosed: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 17,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    width: "85%",
    borderRadius: 13,
    shadowColor: "black",
    elevation: 8,
  },
  titleClosed: {
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 15,
    color: "#172B4D",
  },
  faqContainer: {
    paddingVertical: 17,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#FFFFFF",
    width: "85%",
    borderRadius: 13,
    shadowColor: "black",
    elevation: 8,
  },
  titleContainer: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DDDEE1",
    borderBottomWidth: 1,
  },
  title: {
    color: "#172B4D",
    fontSize: 20,
    fontWeight: "700",
    paddingLeft: 15,
  },
  paragraph: {
    color: "#172B4D",
    padding: 10,
    fontWeight: "600",
  },
});
