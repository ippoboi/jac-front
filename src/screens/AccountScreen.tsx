import { SafeAreaView, Text, View, StyleSheet } from "react-native";

import React, { useState } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButtonHalf from "../components/CustomButtonHalf";
import NewPasswordScreen from "./NewPasswordScreen";
import { useAuth } from "../context/AuthContext";
import LogOutAreYouSureModal from "../components/LogOutAreYouSureModal";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomStackParamList } from "../navigation/BottomTabNav";

type bottomScreenNavigationType = NativeStackNavigationProp<
  BottomStackParamList,
  "Account"
>;

export default function AccountScreen() {
  const navigation = useNavigation<bottomScreenNavigationType>();
  const { userInfos } = useAuth();

  const [firstName, setFirstName] = useState(userInfos?.firstName);
  const [lastName, setlastName] = useState(userInfos?.lastName);
  const [age, setAge] = useState(userInfos?.age);
  const [email, setEmail] = useState(userInfos?.email);
  const [job, setJob] = useState(userInfos?.job);
  const [phone, setPhone] = useState(userInfos?.phone);

  const onAccountEditPressed = () => {
    navigation.navigate("AccountEdit");
  };

  const onChangePasswordPressed = () => {
    navigation.navigate("ChangePassword");
  };

  const onDowloadPressed = () => {
    console.log("Download");
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.nameFilter}>
          <Text style={styles.title}>
            {firstName} {lastName}
          </Text>
          <LogOutAreYouSureModal />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.card}>
          <View>
            <View style={styles.infoTitle}>
              <MaterialCommunityIcons
                name="information-outline"
                size={20}
                color={"#FF8800"}
                style={{
                  backgroundColor: "#FFF1D1",
                  padding: 5,
                  borderRadius: 30,
                }}
              />
              <Text style={styles.cardTitleInfo}>Mes informations</Text>
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text>{"Nom : " + lastName}</Text>
            <Text>{"Prénom : " + firstName}</Text>
            <Text>{"Age : " + age}</Text>
            <Text>{"Tel : " + phone}</Text>
            <Text>{"Mail : " + email}</Text>
            <Text>{"Activité : " + job}</Text>
          </View>
          <View style={styles.btnInfo}>
            <CustomButtonHalf
              text="Changer de mot de passe"
              onPress={onChangePasswordPressed}
            />
            <CustomButtonHalf
              text="Modifier les informations"
              onPress={onAccountEditPressed}
            />
          </View>
        </View>
        <View style={styles.card}>
          <View>
            <View style={styles.dlTitle}>
              <MaterialCommunityIcons
                name="download"
                size={20}
                color={"#07db00"}
                style={{
                  backgroundColor: "#D1FFD3",
                  padding: 5,
                  borderRadius: 30,
                }}
              />
              <Text style={styles.cardTitleRules}>
                Charte d'accès aux évènements
              </Text>
            </View>
          </View>
          <View style={styles.btnDownload}>
            <CustomButtonHalf text="Télécharger" onPress={onDowloadPressed} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#172B4D",
    fontWeight: "700",
  },
  statusUpdate: {
    width: "85%",
    fontWeight: "700",
    fontSize: RFPercentage(2),
    color: "#444C6A",
    height: 30,
    marginTop: 18,
    paddingLeft: 5,
  },
  nameFilter: {
    width: "85%",
    paddingBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  btnAccount: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 13,
    borderColor: "#E6EAFB",
    borderWidth: 2,
    elevation: 5,
  },
  card: {
    padding: 10,
    margin: 10,
    backgroundColor: "#FFFFFF",
    width: "85%",
    borderRadius: 13,
    shadowColor: "black",
    elevation: 4,
  },
  infoContainer: {
    padding: 10,
  },
  infoTitle: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DDDEE1",
    borderBottomWidth: 1,
  },
  dlTitle: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  cardTitleInfo: {
    color: "#172B4D",
    fontWeight: "700",
    fontSize: RFPercentage(3),
    paddingLeft: 10,
  },
  cardTitleRules: {
    fontWeight: "700",
    color: "#172B4D",
    fontSize: RFPercentage(2.3),
    paddingLeft: 10,
  },
  btnInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnDownload: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
