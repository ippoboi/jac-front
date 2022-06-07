import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { EventInfo } from "../types/data";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButton from "./CustomButton";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "../data/axios";
const GET_EVENT_URL = "event";

export default function EventComponent({ item }: { item: EventInfo }) {
  const onParticipatePressed = () => {
    console.log("Participate");
  };

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.infoTitle}>
          <View
            style={{
              backgroundColor: "#FFF1D1",
              padding: 7,
              borderRadius: 30,
            }}
          >
            <Image
              source={require("../../assets/formation.png")}
              style={{
                width: 18,
                height: 18,
              }}
            />
          </View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{ color: "#172B4D", padding: 10 }} numberOfLines={9}>
            {item.description.replace(/\\n/g, "\n")}
          </Text>
          <MaterialIcons name="arrow-drop-down" size={25} color={"grey"} />
        </TouchableOpacity>
        <View style={styles.cardFooter}>
          <View style={styles.date}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#172B4D" }}>
              {item.date}
            </Text>
            <Text style={{ fontSize: 12, color: "#7C818F" }}>
              {item.startHour} - {item.endHour}
            </Text>
          </View>
          <View style={{ width: "50%" }}>
            <CustomButton text="Y participer" onPress={onParticipatePressed} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 13,
    shadowColor: "black",
    elevation: 10,
  },
  infoContainer: {
    padding: 10,
    height: 200,
  },
  infoTitle: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DDDEE1",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    color: "#172B4D",
    paddingLeft: 15,
    fontWeight: "700",
  },
  cardTitleInfo: {
    fontWeight: "600",
    fontSize: RFPercentage(3),
    paddingLeft: 10,
  },
  date: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: 15,
  },
  cardFooter: {
    color: "#172B4D",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "#DDDEE1",
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
    paddingTop: 5,
    paddingBottom: 10,
  },
});
