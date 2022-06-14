import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";
import CustomButton from "../components/CustomButton";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "EventScreen"
>;

export default function EventScreen() {
  const navigation = useNavigation<globalScreenNavigationType>();

  const onBackPressed = () => {
    navigation.navigate("BottomTabNavigator");
  };

  const onParticipatePress = () => {
    navigation.navigate("BottomTabNavigator");
    Alert.alert("", "Vous vous êtes inscrit !");
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <View>
        <View
          style={{
            height: 220,
            width: "100%",
            backgroundColor: "#0065ff",
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
          }}
        />
        <TouchableOpacity onPress={onBackPressed} style={styles.backbtn}>
          <MaterialIcons name="arrow-back-ios" size={30} color={"#172B4D"} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.titleBookmark}>
          <View>
            <Text
              style={{ color: "#0065ff", fontWeight: "bold", fontSize: 29 }}
            >
              Formation #2
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location-sharp" size={20} color={"#a2a2a2"} />
              <Text style={styles.location}>Paris, France</Text>
            </View>
          </View>
          <Shadow startColor="#0001">
            <TouchableOpacity style={styles.bookmarkbtn} activeOpacity={0.4}>
              <FontAwesome name="bookmark-o" size={26} color="#172B4D" />
            </TouchableOpacity>
          </Shadow>
        </View>

        {/* Event Hour Date Add */}
        <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
          <Shadow startColor="#0001" viewStyle={{ width: "100%" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 7,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View style={{ paddingHorizontal: 15, alignItems: "center" }}>
                  <Text style={{ color: "#0065ff" }}>24</Text>
                  <Text>mai</Text>
                </View>
                <View
                  style={{ height: 30, width: 1, backgroundColor: "#707070" }}
                />
                <View style={{ paddingHorizontal: 15 }}>
                  <Text style={{ color: "#0065ff" }}>Lundi</Text>
                  <Text>16:00 - 19:00</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.btn}>
                <Feather name="calendar" size={18} color={"white"} />
                <Text style={{ color: "white", fontSize: 10 }}>Ajouter</Text>
              </TouchableOpacity>
            </View>
          </Shadow>
        </View>

        {/* Participants */}
        <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
          <Text style={{ color: "#172B4d", fontWeight: "bold", fontSize: 20 }}>
            Participants
          </Text>
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
                height: 46,
                width: 46,
                backgroundColor: "red",
                borderRadius: 30,
              }}
            />
            <View
              style={{
                height: 46,
                width: 46,
                backgroundColor: "#0065ff",
                borderRadius: 30,
                marginLeft: -14,
              }}
            />
            <View
              style={{
                height: 46,
                width: 46,
                backgroundColor: "yellow",
                borderRadius: 30,
                marginLeft: -14,
              }}
            />
            <View
              style={{
                height: 46,
                width: 46,
                backgroundColor: "green",
                borderRadius: 30,
                marginLeft: -14,
              }}
            />
            <View
              style={{
                height: 46,
                width: 46,
                backgroundColor: "#0065ff",
                borderRadius: 30,
                marginLeft: -14,
              }}
            />
            <View
              style={{
                marginLeft: 5,
                paddingVertical: 2,
                paddingHorizontal: 8,
                borderRadius: 5,
                flexDirection: "row",
              }}
            >
              <Text style={{ color: "#0065ff", fontSize: 15, paddingRight: 5 }}>
                24
              </Text>
              <Text style={{ fontSize: 15, color: "#777777" }}>
                Places restantes
              </Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={{ paddingHorizontal: 30 }}>
          <Text
            style={{
              color: "#172B4d",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Description
          </Text>
          <Text style={{ fontSize: 15, color: "#777777", marginBottom: 20 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
            auctor risus. In sit amet odio volutpat, ultrices lorem elementum.
          </Text>
        </View>

        {/* Documents */}
        <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
          <Text
            style={{
              color: "#172B4d",
              fontWeight: "bold",
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            Documents
          </Text>
          <View style={{ paddingHorizontal: 10 }}>
            <TouchableOpacity>
              <Text
                style={{
                  marginBottom: 5,
                  textDecorationStyle: "solid",
                  textDecorationLine: "underline",
                  color: "#0065ff",
                }}
              >
                Text.pdf
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={{
                  marginBottom: 5,
                  textDecorationStyle: "solid",
                  textDecorationLine: "underline",
                  color: "#0065ff",
                }}
              >
                Image.png
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            paddingHorizontal: 40,
            marginBottom: 20,
          }}
        >
          <CustomButton text={"Participer"} onPress={onParticipatePress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 10,
    alignItems: "center",
  },
  backbtn: {
    position: "absolute",
    backgroundColor: "white",
    top: 20,
    left: 20,
    paddingLeft: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  location: {
    color: "#a2a2a2",
    fontWeight: "500",
    fontSize: 15,
    paddingLeft: 5,
  },
  bookmarkbtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 7,
    borderColor: "#E6EAFB",
  },
  titleBookmark: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
  },
  btn: {
    backgroundColor: "#0065ff",
    borderRadius: 5,
    alignItems: "center",
    padding: 5,
  },
});
