import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { useNavigation } from "@react-navigation/native";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "EventCardMed"
>;

export default function EventCardMedPicture() {
  const navigation = useNavigation<globalScreenNavigationType>();
  const onEventPressed = () => {
    navigation.navigate("EventScreen");
  };

  return (
    <View style={{ marginVertical: 15 }}>
      <Shadow offset={[0, 4]} startColor="#0001">
        <TouchableOpacity
          style={styles.cardContainer}
          activeOpacity={0.9}
          onPress={onEventPressed}
        >
          <View style={{ flexDirection: "row", height: "100%" }}>
            <View style={styles.leftPicture}>
              <View style={{ margin: 10 }}>
                <Shadow startColor="#0001">
                  <TouchableOpacity
                    style={styles.bookmarkbtn}
                    activeOpacity={0.7}
                  >
                    <FontAwesome name="bookmark-o" size={20} color="#172B4D" />
                  </TouchableOpacity>
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
              <View
                style={{
                  // backgroundColor: "yellow",
                  flexDirection: "row",
                  marginTop: 20,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 24,
                    width: 24,
                    backgroundColor: "red",
                    borderRadius: 20,
                  }}
                />
                <View
                  style={{
                    height: 24,
                    width: 24,
                    backgroundColor: "#0065ff",
                    borderRadius: 20,
                    marginLeft: -14,
                  }}
                />
                <View
                  style={{
                    height: 24,
                    width: 24,
                    backgroundColor: "yellow",
                    borderRadius: 20,
                    marginLeft: -14,
                  }}
                />
                <View
                  style={{
                    height: 24,
                    width: 24,
                    backgroundColor: "green",
                    borderRadius: 20,
                    marginLeft: -14,
                  }}
                />
                <View
                  style={{
                    height: 24,
                    width: 24,
                    backgroundColor: "#0065ff",
                    borderRadius: 20,
                    marginLeft: -14,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      paddingTop: 4,
                      paddingLeft: 4,
                      fontSize: 12,
                    }}
                  >
                    +5
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 10,
                    backgroundColor: "#0065ff",
                    marginLeft: 5,
                    paddingVertical: 2,
                    paddingHorizontal: 8,
                    borderRadius: 5,
                    color: "white",
                  }}
                >
                  Amis intéressés
                </Text>
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
    height: 180,
    backgroundColor: "white",
    borderRadius: 10,
  },
  bookmarkbtn: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "white",
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
