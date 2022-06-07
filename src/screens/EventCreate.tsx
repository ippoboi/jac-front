import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, VirtualizedList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalStackParamList } from "../navigation/GlobalNavigator";

type globalScreenNavigationType = NativeStackNavigationProp<
  GlobalStackParamList,
  "EventCreate"
>;

export default function EventCreate() {
  return (
    <SafeAreaView>
      <View>
        <Text>test</Text>
      </View>
    </SafeAreaView>
  );
}
