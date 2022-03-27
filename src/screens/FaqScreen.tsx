import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";

import React, { useState } from "react";

import FaqComponent from "../components/FaqComponent";

export default function AccountScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Foire Aux Questions</Text>
      </View>
      <ScrollView style={{ marginBottom: 67 }}>
        <FaqComponent text={"Comment s'inscrire à un événement ?"} />
        <FaqComponent text={"Puis-je changer mon mot de passe ?"} />
        <FaqComponent text={"Puis-je participer à tous les événements ?"} />
        <FaqComponent text={"Comment puis-je obtenir une assistance ?"} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  title: {
    width: "85%",
    fontSize: 30,
    marginBottom: 10,
    color: "#172B4D",
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});
