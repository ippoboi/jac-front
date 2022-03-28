import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";

import React from "react";
import FaqData from "../faqdata.json";
import FaqComponent from "../components/FaqComponent";

export default function FaqScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Foire Aux Questions</Text>
      </View>
      <ScrollView style={{ marginBottom: 67 }}>
        {FaqData.FaqObj.map((faqobj, index) => {
          return (
            <FaqComponent
              key={index}
              text={faqobj.Question}
              paragraph={faqobj.Answer}
            />
          );
        })}
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
