import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";

import React, { useEffect, useState } from "react";
import FaqData from "../faqdata.json";
import FaqComponent from "../components/FaqComponent";
import axios from "../data/axios";

const GET_FAQ_URL = "question";

export default function FaqScreen() {
  const [faqList, setFaqList] = useState(null);

  async function updateFaqList() {
    await axios
      .get("question", {})
      .then((res) => {
        setFaqList(res.data);
        console.log(faqList);
        return faqList;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    updateFaqList();
    console.log(faqList);
  }, []);

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
