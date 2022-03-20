import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { EventInfo } from "../types/data";
import formation from "../../assets/formation.png";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButtonHalf from "./CustomButtonHalf";

export default function EventComponent({ item }: { item: EventInfo }) {
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.infoTitle}>
          <View
            style={{ backgroundColor: "#FFF1D1", padding: 5, borderRadius: 30 }}
          >
            <Image
              source={formation}
              style={{
                width: 16,
                height: 16,
              }}
            />
          </View>
          <Text>{item.title}</Text>
        </View>
        <View>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.dateBtn}>
          <Text>{item.date}</Text>
          <View style={styles.btnInfo}>
            <CustomButtonHalf text="Y participer" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: "85%",
    borderRadius: 13,
    shadowColor: "black",
    elevation: 10,
  },
  infoContainer: {
    padding: 10,
  },
  infoTitle: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DDDEE1",
    borderBottomWidth: 1,
  },
  cardTitleInfo: {
    fontWeight: "600",
    fontSize: RFPercentage(3),
    paddingLeft: 10,
  },
  btnInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateBtn: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "red",
  },
});
