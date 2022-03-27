import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface Props {
  text: string;
}

export default function faqComponent({ text }: Props) {
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
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            varius mollis eleifend. Praesent feugiat magna nisl, a volutpat
            purus semper et. Cras consectetur ligula in malesuada rutrum. Duis
            eu tempus sapien, eu mattis erat. Etiam faucibus, turpis at rhoncus
            vehicula, purus felis porta ipsum, at scelerisque lacus arcu eget
            leo. Mauris arcu metus, gravida sed lacus a, mattis fermentum dolor.
            Proin finibus massa sapien, vitae posuere ipsum semper et. In nisi
            arcu, dapibus sit amet placerat ut, vestibulum id eros. Fusce rutrum
            ligula mi, nec porta arcu porta ut. Nulla id erat id diam
            sollicitudin imperdiet. Sed ut sem nec nisl faucibus congue. Nam
            bibendum, nisl sed feugiat tincidunt, eros arcu tristique augue, et
            efficitur sem magna in justo. Duis vel augue in urna convallis
            consectetur.
          </Text>
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
