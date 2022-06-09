import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

import { Feather, Ionicons } from "@expo/vector-icons";
import EventCardBigPicture from "../components/EventCardBigPicture";
import CategoryBtn from "../components/CategoryBtn";
import EventCardMedPicture from "../components/EventCardMedPicture";

export default function Feed() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.blueObject}></View>

      <View style={styles.container}>
        <View style={styles.TopBar}>
          <View>
            <Text style={{ fontSize: 15, color: "white" }}>
              Mercredi 8 juin
            </Text>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "700" }}>
              Bonjour Guillaume !
            </Text>
          </View>
          <Shadow>
            <TouchableOpacity style={styles.notificationbtn}>
              <Feather name="bell" size={26} color="#172B4D" />
            </TouchableOpacity>
          </Shadow>
        </View>

        <View style={{ marginTop: 30, marginHorizontal: 30 }}>
          <Shadow startColor="#0001" viewStyle={{ borderRadius: 6 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: 6,
              }}
            >
              <Feather
                name="search"
                size={26}
                color="#777777"
                style={{ paddingLeft: 15 }}
              />
              <TextInput
                style={styles.searchBar}
                placeholder="Rechercher un évènement... "
              />
              <View style={{ paddingRight: 15 }}>
                <TouchableOpacity
                  style={{ backgroundColor: "#0065ff", borderRadius: 5 }}
                >
                  <Ionicons
                    name="options"
                    size={26}
                    color="white"
                    style={{ padding: 5 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </Shadow>
        </View>

        <ScrollView style={{ height: "73%" }}>
          <View>
            <View style={{ width: "100%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 20,
                  marginHorizontal: 30,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#172B4D" }}
                >
                  Populaires
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
              <ScrollView horizontal={true}>
                <EventCardBigPicture />
                <EventCardBigPicture />
                <EventCardBigPicture />
              </ScrollView>
            </View>
            <View
              style={{ width: "100%", paddingHorizontal: 30, marginTop: 10 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "700", color: "#172B4D" }}
                >
                  Catégories
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
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                <CategoryBtn />
                <CategoryBtn />
                <CategoryBtn />
                <CategoryBtn />
                <CategoryBtn />
              </View>
              <View>
                <EventCardMedPicture />
                <EventCardMedPicture />
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{ position: "absolute", bottom: 20, left: 20 }}
          activeOpacity={0.5}
        >
          <Text
            style={{
              paddingHorizontal: 18,
              paddingVertical: 5,
              backgroundColor: "#0065ff",
              fontSize: 40,
              borderRadius: 50,
              color: "white",
              elevation: 5,
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  blueObject: {
    width: "100%",
    height: 125,
    backgroundColor: "#0065ff",
    position: "absolute",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  TopBar: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  container: {
    paddingTop: 20,
    alignItems: "center",
    borderBottomColor: "#DDDEE1",
  },
  notificationbtn: {
    padding: 7,
    backgroundColor: "white",
    borderRadius: 7,
    borderColor: "#E6EAFB",
  },
  searchBar: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 6,
    backgroundColor: "white",
  },
});
