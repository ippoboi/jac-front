import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

export default function CategoryBtn() {
  return (
    <View>
      <Shadow startColor="rgba(0, 0, 0, 0.04)">
        <TouchableOpacity style={{ padding: 13, borderRadius: 10 }}>
          <MaterialCommunityIcons
            name="crop-square"
            size={22}
            color="#172B4D"
          />
        </TouchableOpacity>
      </Shadow>
    </View>
  );
}
