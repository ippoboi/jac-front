import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import EventCardSmallPicture from "../components/EventCardSmallPicture";
import EventCardBigPicture from "../components/EventCardBigPicture";
import EventCardBigPictureWoBookmark from "../components/EventCardBigPictureWoBookmark";
import { useNavigation } from "@react-navigation/native";
import { BottomStackParamList } from "../navigation/BottomTabNav";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type bottomScreenNavigationType = NativeStackNavigationProp<
  BottomStackParamList,
  "Profil"
>;

export default function ProfilScreen() {
  const navigation = useNavigation<bottomScreenNavigationType>();

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.title}>Profil</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AccountEdit");
            }}
          >
            <SimpleLineIcons name="note" size={25} color="#172B4D" />
          </TouchableOpacity>
        </View>
        <View style={styles.profilinfo}>
          <Shadow startColor="rgba(0,0,0,0.05)">
            <View style={styles.profilpic}></View>
          </Shadow>
          <View style={styles.info}>
            <Text style={{ fontSize: 20, fontWeight: "700", color: "#172b4d" }}>
              Guillaume Bodin
            </Text>
            <Text style={{ fontSize: 15, color: "#777777" }}>Ingénieur</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location-sharp" size={20} color={"#394DFD"} />
              <Text style={{ color: "#394DFD", fontWeight: "700" }}>
                Paris, France
              </Text>
            </View>
            <View>
              <Text style={styles.validate}>Validé</Text>
            </View>
          </View>
        </View>
        <View style={styles.countercontainer}>
          <View style={styles.counters}>
            <Text
              style={{ fontSize: 20, color: "#0065ff", fontWeight: "bold" }}
            >
              123
            </Text>
            <Text style={{ fontSize: 15, color: "#172b4d" }}>Évènements</Text>
          </View>
          <View style={styles.counters}>
            <Text
              style={{ fontSize: 20, color: "#0065ff", fontWeight: "bold" }}
            >
              200
            </Text>
            <Text style={{ fontSize: 15, color: "#172b4d" }}>Amis</Text>
          </View>
        </View>
        <View style={{ marginHorizontal: 30 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "#172b4d",
              marginBottom: 10,
            }}
          >
            Bio
          </Text>
          <Text style={{ fontSize: 15, color: "#777777", marginBottom: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            auctor risus. In sit amet odio volutpat, ultrices lorem elementum.
          </Text>
        </View>
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
        <ScrollView horizontal={true}>
          <EventCardBigPictureWoBookmark />
          <EventCardBigPictureWoBookmark />
          <EventCardBigPictureWoBookmark />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
  title: {
    fontSize: 30,
    color: "#172B4D",
    fontWeight: "700",
  },
  topbar: {
    marginHorizontal: 30,
    paddingBottom: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profilpic: {
    width: 113,
    height: 113,
    backgroundColor: "#FFA4A4",
    borderRadius: 10,
  },
  profilinfo: {
    flexDirection: "row",
    marginHorizontal: 30,
    // backgroundColor: "yellow",
    marginBottom: 30,
  },
  info: { marginLeft: 30, justifyContent: "space-between" },
  validate: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#394DFD",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    width: "41%",
  },
  countercontainer: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-around",
    marginBottom: 30,
  },
  counters: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
