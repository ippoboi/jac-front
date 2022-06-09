import { Entypo } from "@expo/vector-icons";
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

  const createEvent = async (
    title: string,
    date: string,
    hour: string,
    places: string,
    description: string
  ) => {
    await axios.post("event/title", {});
  };

  const onCancelPress = () => {
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameCross}>
        <Text style={styles.title}>Nouvel Evenement</Text>
        <TouchableOpacity onPress={onCancelPress}>
          <Entypo name="cross" size={34} color="#172B4D" style={styles.cross} />
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 40 }}>
        <ModifyInfoComp
          prop={"Titre"}
          value={title}
          onChangeText={(title) => setTitle(title)}
        />
        <ModifyInfoComp
          prop={"Date"}
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
      </View>
      <CustomButton
        text={"Enregistrer les modifications"}
        onPress={onQuitPress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingBottom: 10,
    alignItems: "center",
  },
  nameCross: {
    width: "85%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cross: {},
  title: {
    width: "85%",
    fontSize: 30,
    color: "#172B4D",
    fontWeight: "700",
    flexDirection: "row",
    justifyContent: "flex-start",
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
});