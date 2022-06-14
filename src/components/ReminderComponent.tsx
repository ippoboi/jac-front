import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Shadow } from "react-native-shadow-2";

export default function ReminderComponent() {
  return (
    <View style={{ marginBottom: 20 }}>
      <Shadow startColor="#0001">
        <View style={styles.card}>
          <Text style={styles.title}>Formation #2</Text>
          <Text style={styles.description}>
            Votre évènement commence dans 1 heure
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
              Voir l'évènement
            </Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 15 }}>Il y a 5 jours</Text>
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
  title: { fontSize: 20, color: "#0065ff", fontWeight: "bold" },
  description: { fontSize: 15, marginBottom: 15 },
  btn: {
    backgroundColor: "#0065ff",
    padding: 7,
    width: "45%",
    borderRadius: 5,
  },
});
