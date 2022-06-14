import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Shadow } from "react-native-shadow-2";
import { Ionicons } from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";

export default function UserAdminCardComponent() {
  const [toggle, setToggle] = useState(false);

  const onTogglePressed = (toggle: boolean) => {
    setToggle(toggle);
  };

  return (
    <SafeAreaView>
      <View style={{ marginVertical: 15, marginHorizontal: 15, width: "100%" }}>
        <Shadow>
          <View style={{ borderRadius: 20, padding: 20 }}>
            <View style={styles.profilinfo}>
              <Shadow startColor="rgba(0,0,0,0.05)">
                <View style={styles.profilpic}></View>
              </Shadow>
              <View style={styles.info}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "700",
                      color: "#172b4d",
                      marginBottom: 6,
                    }}
                  >
                    Guillaume Bodin
                  </Text>
                  <Text
                    style={{ fontSize: 15, color: "#777777", marginBottom: 6 }}
                  >
                    Ingenieur
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                      name="location-sharp"
                      size={20}
                      color={"#394DFD"}
                    />
                    <Text style={{ color: "#394DFD", fontWeight: "700" }}>
                      Paris, France
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View style={{ width: 92 }}>
                <TouchableOpacity>
                  <Text style={styles.validate}>Plus d'infos</Text>
                </TouchableOpacity>
              </View>
              {toggle ? (
                <View style={{ width: 59 }}>
                  <Text style={styles.validate}>Validé</Text>
                </View>
              ) : (
                <View style={{ width: 90 }}>
                  <Text style={styles.nonvalidate}>Non Validé</Text>
                </View>
              )}
              <ToggleSwitch
                isOn={toggle}
                onColor="green"
                offColor="red"
                onToggle={onTogglePressed}
              />
            </View>
          </View>
        </Shadow>
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
    // backgroundColor: "yellow",
  },
  info: { marginLeft: 30, justifyContent: "space-between" },
  validate: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#394DFD",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    // width: "50%",
  },
  nonvalidate: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "red",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    // width: "50%",
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
