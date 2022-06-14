import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EventCardSmallPicture from "../components/EventCardSmallPicture";
import EventCardSmallPicturePassed from "../components/EventCardSmallPicturePassed";

export default function YourEventsScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.blueObject}></View>

      <View style={styles.container}>
        <Text style={styles.title}>Vos Évènements</Text>
        <ScrollView style={{ height: "83%" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              marginHorizontal: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#172B4D" }}>
              A venir
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "#9F9F9F",
                }}
              >
                Voir tout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 30 }}>
            <EventCardSmallPicture />
            <EventCardSmallPicture />
            <EventCardSmallPicture />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
              marginHorizontal: 30,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#172B4D" }}>
              Passés
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "700",
                  color: "#9F9F9F",
                }}
              >
                Voir tout
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginLeft: 30 }}>
            <EventCardSmallPicturePassed />
            <EventCardSmallPicturePassed />
            <EventCardSmallPicturePassed />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blueObject: {
    width: "100%",
    height: 70,
    backgroundColor: "#0065ff",
    position: "absolute",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  container: { paddingTop: 20 },
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    paddingLeft: 30,
    paddingBottom: 20,
  },
  venir: {
    paddingLeft: 30,
    fontSize: 20,
    color: "#172B4D",
    fontWeight: "700",
  },
  passes: {
    paddingLeft: 30,
    fontSize: 20,
    color: "#172B4D",
    fontWeight: "700",
  },
});
