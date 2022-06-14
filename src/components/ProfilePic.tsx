import { View, Text } from "react-native";
import React from "react";

type Props = {
  height: string | number | undefined;
  width: string | number | undefined;
  backgroundColor: string;
};

export default function ProfilePic({ height, width, backgroundColor }: Props) {
  return (
    <View
      style={{
        height: height,
        width: width,
        backgroundColor: backgroundColor,
        borderRadius: 20,
      }}
    />
  );
}
