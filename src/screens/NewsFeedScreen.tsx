import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";

import dataTest from "../dataTestFeed.json";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { RFPercentage } from "react-native-responsive-fontsize";
import EventComponent from "../components/EventComponent";
import { EventInfo } from "../types/data";
import { useAuth } from "../context/AuthContext";
import axios from "../data/axios";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomStackParamList } from "../navigation/BottomTabNav";
const GET_EVENT_URL = "event";

type bottomScreenNavigationType = NativeStackNavigationProp<
  BottomStackParamList,
  "Feed"
>;

export default function NewsFeedScreen() {
  const { userInfos } = useAuth();
  const navigation = useNavigation<bottomScreenNavigationType>();
  const [eventInfo, setEventInfo] = useState();
  const [firstName, setFirstName] = useState(userInfos?.firstName);

  async function updateEvent() {
    await axios
      .get(GET_EVENT_URL, {})
      .then((res) => {
        setEventInfo(res.data);
        return eventInfo;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const onCreateEventPressed = () => {
    navigation.navigate("EventCreate");
  };

  useEffect(() => {
    updateEvent();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.nameFilter}>
          <Text style={styles.title}>Bonjour {firstName}</Text>
          <TouchableOpacity style={styles.btnFilter}>
            <Feather name="filter" size={25} color="#172B4D" />
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.searchbar}
          placeholder="Rechercher un évènement..."
        />
        {userInfos?.role[0].roleLabel === "admin" && (
          <View style={{ width: "90%", left: 18, paddingVertical: 10 }}>
            <CustomButton
              text="Crée Évenement"
              onPress={onCreateEventPressed}
            />
          </View>
        )}
        <View style={styles.infoContainer}>
          <FlatList
            data={eventInfo}
            renderItem={EventComponent}
            keyExtractor={(item) => item.id}
            style={{ marginBottom: 290, width: "93%" }}
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
    borderBottomColor: "#DDDEE1",
    borderWidth: 1,
  },
  title: {
    fontSize: 30,
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
  infoContainer: {
    width: "100%",
    alignItems: "center",
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
