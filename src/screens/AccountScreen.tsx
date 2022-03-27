import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
} from "react-native";

import React from "react";
import dataTestAccountProfile from "../dataTestAccountProfile.json";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { RFPercentage } from "react-native-responsive-fontsize";
import CustomButtonHalf from "../components/CustomButtonHalf";

export default function AccountScreen() {
  const onDowloadPressed = () => {
    console.log("Download");
  };
  const onChangePasswordPressed = () => {
    console.log("Change Password");
  };

  const onEditInfoPresse = () => {
    console.log("Edit Info");
  };

  const renderItem = ({ item }: any) => (
    <View>
      <Text>{"Nom : " + item.surname}</Text>
      <Text>{"Prénom : " + item.firstname}</Text>
      <Text>{"Age : " + item.age}</Text>
      <Text>{"Tel : " + item.phone_number}</Text>
      <Text>{"Mail : " + item.mail}</Text>
      <Text>{"Activité : " + item.job}</Text>
    </View>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.nameFilter}>
          <Text style={styles.title}>Guillaume BODIN</Text>
          <TouchableOpacity style={styles.btnAccount}>
            <Ionicons name="person-outline" size={25} color="#172B4D" />
          </TouchableOpacity>
        </View>
        <Text style={styles.statusUpdate}>
          Votre dernière activité remonte au 10/02/2022
        </Text>
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
            <FlatList
              data={dataTestAccountProfile}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.btnInfo}>
            <CustomButtonHalf
              text="Changer de mot de passe"
              onPress={onChangePasswordPressed}
            />
            <CustomButtonHalf
              text="Modifier les informations"
              onPress={onEditInfoPresse}
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
    elevation: 10,
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
