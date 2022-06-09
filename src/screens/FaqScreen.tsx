import { SafeAreaView, Text, View, StyleSheet, ScrollView } from "react-native";

import React, { useEffect, useState } from "react";
import FaqData from "../faqdata.json";
import FaqComponent from "../components/FaqComponent";
import axios from "../data/axios";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomStackParamList } from "../navigation/BottomTabNav";
import { useAuth } from "../context/AuthContext";

const GET_FAQ_URL = "question";
type bottomScreenNavigationType = NativeStackNavigationProp<
  BottomStackParamList,
  "Faq"
>;

export default function FaqScreen() {
  const [faqList, setFaqList] = useState(null);
  const { userInfos } = useAuth();
  const navigation = useNavigation<bottomScreenNavigationType>();

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

  const onFaqCreatePressed = () => {
    navigation.navigate("FaqCreate");
  };

  useEffect(() => {
    updateFaqList();
    console.log(faqList);
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Foire Aux Questions</Text>
      </View>
      {userInfos?.role[0].roleLabel === "admin" && (
        <View style={{ width: "90%", left: 35, paddingVertical: 10 }}>
          <CustomButton
            text="Ajoute une Question"
            onPress={onFaqCreatePressed}
          />
        </View>
      )}
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
