import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  Touchable,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "ChangePassword"
>;

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const navigation = useNavigation<globalScreenNavigationType>();
  const { height } = useWindowDimensions();

  const onResetPasswordPressed = () => {
    navigation.navigate("BottomTabNavigator");
    Alert.alert("", "Vous avez changé votre mot de passe !");
  };

  const onCancelPressed = () => {
    navigation.navigate("BottomTabNavigator");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={require("../../assets/logo.png")}
        resizeMode="contain"
      ></Image>
      <Text style={styles.title}>Nouveau mot de passe</Text>

      <View style={styles.emailContainer}>
        <CustomTextInput
          placeholder="Nouveau mot de passe"
          value={newPassword}
          isPassword={true}
          onChangeText={(newPassword) => setNewPassword(newPassword)}
        />
        <FontAwesome5 name="lock" size={27} color="#9A9FA7" />
      </View>

      <Text style={styles.infoText}>Saisissez votre nouveau mot de passe</Text>

      <CustomButton
        text="Réinitialiser mon mot de passe"
        onPress={onResetPasswordPressed}
      />
      <TouchableOpacity style={styles.cancelbtn} onPress={onCancelPressed}>
        <Text style={styles.canceltext}>Annuler</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 176,
    marginBottom: "7%",
  },
  title: {
    color: "#172B4D",
    width: "80%",
    marginLeft: "-10%",
    marginBottom: "7%",
    fontSize: 30,
    fontWeight: "bold",
  },
  emailContainer: {
    flexDirection: "row-reverse",
    paddingBottom: 10,
    alignItems: "center",
  },
  infoText: {
    color: "#9A9FA7",
    marginLeft: "1.6%",
    marginBottom: "10%",
  },
  cancelbtn: {},
  canceltext: {
    color: "#0065FF",
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});
