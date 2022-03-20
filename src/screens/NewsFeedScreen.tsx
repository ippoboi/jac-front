import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Vibration,
} from "react-native";

import dataTest from "../dataTestFeed.json";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButtonHalf from "../components/CustomButtonHalf";
import { RFPercentage } from "react-native-responsive-fontsize";
import formation from "../../assets/formation.png";
import EventComponent from "../components/EventComponent";
import { EventInfo } from "../types/data";

export default function NewsFeedScreen({ item }: { item: EventInfo }) {
  const renderItem = ({ item }: any) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.nameFilter}>
          <Text style={styles.title}>Bonjour Guillaume</Text>
          <TouchableOpacity style={styles.btnFilter}>
            <Feather name="filter" size={25} color="#172B4D" />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.searchbar}
          placeholder="Rechercher un événement..."
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.infoContainer}>
          <FlatList
            data={dataTest as EventInfo[]}
            renderItem={EventComponent}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    // backgroundColor: "red",
    borderBottomColor: "#DDDEE1",
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
    // backgroundColor: "blue",
    color: "#172B4D",
    fontWeight: "700",
  },
  searchbar: {
    borderRadius: 11,
    backgroundColor: "white",
    width: "85%",
    height: 30,
    marginTop: 18,
    marginBottom: 10,
    paddingLeft: 5,
  },
  nameFilter: {
    width: "85%",
    // backgroundColor: "green",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnFilter: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 13,
    borderColor: "#E6EAFB",
    borderWidth: 2,
    elevation: 5,
  },
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
});
