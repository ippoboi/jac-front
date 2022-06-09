import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  VirtualizedList,
  Text,
  Alert,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton";
import ModifyInfoComp from "../components/ModifyInfoComp";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "FaqCreate"
>;

export default function FaqCreate() {
  const navigation = useNavigation<globalScreenNavigationType>();

  const onQuitPress = () => {
    navigation.navigate("BottomTabNavigator");
    Alert.alert("", "Votre question a été rajouté avec succès !");
  };

  const onCancelPress = () => {
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameCross}>
        <Text style={styles.title}>Nouvelle Question</Text>
        <TouchableOpacity onPress={onCancelPress}>
          <Entypo name="cross" size={34} color="#172B4D" style={styles.cross} />
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 40, width: "90%" }}>
        <Text style={styles.prop}>Question</Text>
        <TextInput
          style={styles.textInput}
          placeholder={"Entrez la Question"}
          numberOfLines={2}
          multiline={true}
        />
        <Text style={styles.prop}>Réponse</Text>
        <TextInput
          style={styles.textInput}
          placeholder={"Entrez la Réponse"}
          numberOfLines={10}
          multiline={true}
        />
      </View>
      <CustomButton text={"Enregistrer la question"} onPress={onQuitPress} />
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
