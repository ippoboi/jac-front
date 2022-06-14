import { Entypo, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import ModifyInfoComp from "../components/ModifyInfoComp";
import axios from "../data/axios";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "EventCreate"
>;

export default function EventCreate() {
  const navigation = useNavigation<globalScreenNavigationType>();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [places, setPlaces] = useState("");
  const [description, setDescription] = useState("");

  const onQuitPress = () => {
    navigation.navigate("BottomTabNavigator");
    Alert.alert("", "Vos événement a été créé avec succés !");
  };

  const onBackPressed = () => {
    navigation.navigate("BottomTabNavigator");
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
        <TouchableOpacity style={styles.modifyBtn} activeOpacity={0.5}>
          <SimpleLineIcons name="note" size={20} color="#0065ff" />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 5,
              color: "#0065ff",
              fontWeight: "bold",
            }}
          >
            Modifier
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Création d'Évènement</Text>
      </View>
      <ScrollView style={{}}>
        <View style={{ marginHorizontal: 30 }}>
          <ModifyInfoComp
            prop={"Titre"}
            value={title}
            onChangeText={(title) => setTitle(title)}
          />
          <ModifyInfoComp
            prop={"Catégories"}
            value={date}
            onChangeText={(date) => setDate(date)}
          />
          <ModifyInfoComp
            prop={"Heure"}
            value={hour}
            onChangeText={(hour) => setHour(hour)}
          />
          <ModifyInfoComp
            prop={"Places"}
            value={places}
            onChangeText={(places) => setPlaces(places)}
          />
          <Text style={styles.prop}>Description</Text>
          <TextInput
            style={styles.textInput}
            value={description}
            onChangeText={(description) => setDescription(description)}
            placeholder={"Entrez la Description"}
            numberOfLines={6}
            multiline={true}
          />
          <Text style={styles.propDoc}>Documents</Text>
          <TouchableOpacity style={styles.btnAdd}>
            <Text>Ajoutez des Documents</Text>
          </TouchableOpacity>
          <Text>1 - text.txt</Text>
          <Text>2 - image.png</Text>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <CustomButton text={"Publier"} onPress={onQuitPress} />
          </View>
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
  title: {
    marginTop: 20,
    fontSize: 25,
    color: "#0065ff",
    fontWeight: "700",
    flexDirection: "row",
  },
  prop: {
    color: "#444C6A",
    fontWeight: "bold",
    fontSize: 19,
    paddingTop: 20,
  },
  propDoc: {
    color: "#444C6A",
    fontWeight: "bold",
    fontSize: 19,
    paddingTop: 5,
  },
  textInput: {
    marginVertical: 20,
    justifyContent: "flex-start",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  btnAdd: {
    marginVertical: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  modifyBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    position: "absolute",
    right: 40,
    top: 170,
    borderRadius: 5,
    padding: 5,
  },
});
