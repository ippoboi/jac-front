import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

export default function SubscribeComponent() {
  return (
    <View style={{ marginBottom: 20 }}>
      <Shadow startColor="#0001">
        <View style={styles.card}>
          <Text style={styles.description}>
            Vous vous êtes inscrit à un bel évènement
          </Text>
          <Text style={styles.title}>Formation #1</Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Voir l'évènement
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 15 }}>Il y a 6 jours</Text>
        </View>
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    color: "#0065ff",
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: { fontSize: 15 },
  btn: {
    backgroundColor: "#0065ff",
    padding: 7,
    width: "45%",
    borderRadius: 5,
  },
});
