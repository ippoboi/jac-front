import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  VirtualizedList,
} from "react-native";
import React, { useState } from "react";
import ModifyInfoComp from "../components/ModifyInfoComp";
import CustomButton from "../components/CustomButton";
import AccountScreen from "./AccountScreen";
import { Entypo, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "AccountEdit"
>;

export default function AccountEdit() {
  const navigation = useNavigation<globalScreenNavigationType>();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [job, setJob] = useState("");
  const [town, setTown] = useState("");
  const [country, setCountry] = useState("");
  const [bio, setBio] = useState("");

  const onQuitPress = () => {
    navigation.navigate("BottomTabNavigator");
    Alert.alert("", "Vos données ont été enregistées !");
  };
  const onChangePasswordPressed = () => {
    navigation.navigate("ChangePassword");
  };

  const onCancelPress = () => {
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nameCross}>
        <Text style={styles.title}>Modifier Profil</Text>
        <TouchableOpacity onPress={onCancelPress}>
          <Entypo name="cross" size={34} color="#172B4D" style={styles.cross} />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ width: "100%" }}>
        <View style={styles.profilpicedit}>
          <TouchableOpacity>
            <SimpleLineIcons
              name="note"
              size={25}
              color="#172B4D"
              style={{ marginRight: 30 }}
            />
          </TouchableOpacity>
          <Shadow startColor="rgba(0,0,0,0.05)">
            <View style={styles.profilpic}></View>
          </Shadow>
          <TouchableOpacity>
            <FontAwesome
              name="trash-o"
              size={25}
              color="#172B4D"
              style={{ marginLeft: 30 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center", marginVertical: 10 }}
          onPress={onChangePasswordPressed}
        >
          <Text style={{ color: "#0065ff", fontWeight: "bold", fontSize: 20 }}>
            Changer Mot de Passe
          </Text>
        </TouchableOpacity>
        <View style={{ marginBottom: 40, marginHorizontal: 30 }}>
          <ModifyInfoComp
            prop={"Nom"}
            value={"Bodin"}
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <ModifyInfoComp
            prop={"Prénom"}
            value={"Guillaume"}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <ModifyInfoComp
            prop={"Age"}
            value={"65"}
            onChangeText={(age) => setAge(age)}
          />
          <ModifyInfoComp
            prop={"Tél."}
            value={"0745573829"}
            onChangeText={(phone) => setPhone(phone)}
          />
          <ModifyInfoComp
            prop={"Mail"}
            value={"guillaume-b@hotmail.com"}
            onChangeText={(email) => setEmail(email)}
          />
          <ModifyInfoComp
            prop={"Activité"}
            value={"Professeur des écoles"}
            onChangeText={(job) => setJob(job)}
          />
          <ModifyInfoComp
            prop={"Ville"}
            value={"Paris"}
            onChangeText={(town) => setTown(town)}
          />
          <ModifyInfoComp
            prop={"Pays"}
            value={"France"}
            onChangeText={(country) => setCountry(country)}
          />
          <Text style={styles.prop}>Bio</Text>
          <TextInput
            style={styles.textInput}
            placeholder={bio}
            numberOfLines={5}
            multiline={true}
            value={bio}
            onChangeText={(bio) => setBio(bio)}
          />
        </View>
        <View
          style={{ width: "100%", alignItems: "center", paddingHorizontal: 40 }}
        >
          <CustomButton text={"Enregistrer"} onPress={onQuitPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: "center",
    height: "100%",
    width: "100%",
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
  profilpic: {
    width: 113,
    height: 113,
    backgroundColor: "#FFA4A4",
    borderRadius: 10,
  },
  profilpicedit: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
});
