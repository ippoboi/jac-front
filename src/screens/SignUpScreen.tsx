import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import CustomButton from "../components/CustomButton";
import CustomTextInput from "../components/CustomTextInput";
import CustomButtonWoBorder from "../components/CustomButtonWoBorder";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../navigation/LoginNavigator";
import { useNavigation } from "@react-navigation/native";
import { AuthContext, useAuth } from "../context/AuthContext";

type authScreenNavigationType = NativeStackNavigationProp<
  AuthStackParamList,
  "SignUp"
>;

export default function SignUpScreen() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { register } = useContext(AuthContext);

  const { height } = useWindowDimensions();
  const navigation = useNavigation<authScreenNavigationType>();

  const onSignInPressed = () => {
    register(firstName, lastName, email, password);
  };
  const onLoginPressed = () => {
    navigation.navigate("Login");
  };
  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy");
  };
  const onCookiesPolicyPressed = () => {
    console.warn("Cookies Policy");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={[styles.logo, { height: height * 0.3 }]}
        source={require("../../assets/logo.png")}
        resizeMode="contain"
      ></Image>
      <Text style={styles.title}>Inscription</Text>

      <View style={styles.emailContainer}>
        <CustomTextInput
          placeholder="Prénom"
          value={firstName}
          onChangeText={(firstName) => setFirstName(firstName)}
        />
        <Ionicons name="person" size={27} color="#9A9FA7" />
      </View>

      <View style={styles.emailContainer}>
        <CustomTextInput
          placeholder="Nom"
          value={lastName}
          onChangeText={(surName) => setLastName(surName)}
        />
        <Ionicons name="person" size={27} color="#9A9FA7" />
      </View>

      <View style={styles.emailContainer}>
        <CustomTextInput
          placeholder="Adresse mail"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <MaterialIcons name="alternate-email" size={27} color="#9A9FA7" />
      </View>

      <View style={styles.emailContainer}>
        <CustomTextInput
          placeholder="Mot de passe"
          isPassword={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <FontAwesome5 name="lock" size={27} color="#9A9FA7" />
      </View>

      <Text style={styles.infoText}>
        En vous inscrivant, vous acceptez nos{" "}
        <Text style={styles.infoTextColored} onPress={onTermsOfUsePressed}>
          Conditions d'utilisation
        </Text>{" "}
        ainsi que nos{" "}
        <Text style={styles.infoTextColored} onPress={onPrivacyPolicyPressed}>
          Politiques de confidentialité
        </Text>{" "}
        et{" "}
        <Text style={styles.infoTextColored} onPress={onCookiesPolicyPressed}>
          Politiques de Cookies
        </Text>
      </Text>

      <CustomButton text="S'inscrire" onPress={onSignInPressed} />
      <View style={styles.signup}>
        <Text>Déjà inscrit ?</Text>
        <CustomButtonWoBorder text=" Se connecter" onPress={onLoginPressed} />
      </View>
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
    marginBottom: 20,
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
    marginLeft: "3%",
    alignItems: "center",
  },
  infoText: {
    color: "#9A9FA7",
    marginLeft: "3%",
    marginBottom: "10%",
  },
  infoTextColored: {
    color: "#1962D0",
  },
  signup: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
});
