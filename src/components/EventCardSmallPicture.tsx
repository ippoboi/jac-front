import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

export default function EventCardSmallPicture() {
  return (
    <View style={{ marginVertical: 15 }}>
      <Shadow offset={[0, 4]} startColor="#0001">
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.9}>
          <View style={{ flexDirection: "row", height: "100%" }}>
            <View style={styles.leftPicture}>
              <View style={{ marginLeft: 10, marginTop: "80%" }}>
                <Shadow startColor="#0001">
                  <View style={styles.daysleft}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      5 jours
                    </Text>
                  </View>
                </Shadow>
              </View>
            </View>
            <View style={styles.info}>
              <Text
                style={{ color: "#172b4d", fontWeight: "700", fontSize: 15 }}
              >
                Catégorie
              </Text>
              <Text
                style={{ color: "#0065ff", fontWeight: "700", fontSize: 20 }}
              >
                Formation #2
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 7,
                }}
              >
                <Feather name="calendar" size={18} color={"#172b4d"} />
                <Text
                  style={{
                    color: "#172b4d",
                    fontWeight: "500",
                    fontSize: 15,
                    paddingLeft: 5,
                  }}
                >
                  Lundi 24 Mai 2022
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingTop: 10,
                  marginLeft: 5,
                }}
              >
                <Ionicons name="location-sharp" size={20} color={"#a2a2a2"} />
                <Text style={styles.location}>Paris, France</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 325,
    height: 140,
    backgroundColor: "white",
    borderRadius: 10,
  },
  daysleft: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "#0065ff",
    borderRadius: 7,
    borderColor: "#E6EAFB",
  },
  category: {
    fontSize: 15,
    fontWeight: "700",
    color: "white",
    backgroundColor: "#0065ff",
    padding: 5,
    borderRadius: 6,
  },
  info: {
    paddingBottom: 10,
    marginLeft: 20,
    marginTop: 15,
  },
  location: {
    color: "#a2a2a2",
    fontWeight: "500",
    fontSize: 15,
    paddingLeft: 5,
  },
  leftPicture: {
    backgroundColor: "#ffefa1",
    width: "40%",
    height: "100%",
    borderRadius: 10,
  },
});
