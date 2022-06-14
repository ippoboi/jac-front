import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "EventCard"
>;

export default function EventCardBigPicture() {
  const navigation = useNavigation<globalScreenNavigationType>();
  const onEventPressed = () => {
    navigation.navigate("EventScreen");
  };

  return (
    <View style={{ marginVertical: 15, paddingHorizontal: 30 }}>
      <Shadow offset={[0, 4]} startColor="#0001">
        <TouchableOpacity
          style={styles.cardContainer}
          activeOpacity={0.9}
          onPress={onEventPressed}
        >
          <View style={styles.topCard}>
            <Text style={styles.category}>Catégorie</Text>
            <Shadow startColor="#0001">
              <TouchableOpacity style={styles.bookmarkbtn} activeOpacity={0.7}>
                <FontAwesome name="bookmark-o" size={20} color="#172B4D" />
              </TouchableOpacity>
            </Shadow>
          </View>
          <View style={styles.botCard}>
            <Text style={{ color: "white", fontWeight: "500" }}>
              Lundi 24 Mai 2022
            </Text>
            <Text style={{ color: "white", fontWeight: "700", fontSize: 24 }}>
              Formation #2
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location-sharp" size={20} color={"white"} />
              <Text style={styles.location}>Paris, France</Text>
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
    height: 180,
    backgroundColor: "#FF9CD8",
    borderRadius: 10,
    justifyContent: "space-between",
  },
  bookmarkbtn: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "white",
    borderRadius: 7,
    borderColor: "#E6EAFB",
  },
  topCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 10,
  },
  category: {
    fontSize: 15,
    fontWeight: "700",
    color: "white",
    backgroundColor: "#0065ff",
    padding: 5,
    borderRadius: 6,
  },
  botCard: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  location: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
    paddingLeft: 5,
  },
});
