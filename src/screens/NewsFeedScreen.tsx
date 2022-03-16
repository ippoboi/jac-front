import { Text, View, StyleSheet, FlatList, TextInput } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import dataTest from '../dataTest.json'

export default function NewsFeedScreen({navigation}: NativeStackHeaderProps) {

    const renderItem = ({item} :any) => (
      <View>
        <Text>{item.title}</Text>
      </View>
    )

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Bonjour Guillaume</Text>
          <TextInput 
          style={styles.searchbar}
          placeholder= "Rechercher un événement..."
          />
        </View>
        <FlatList
          data={dataTest}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: "center",
    backgroundColor: "#F9FAFC"
  },
  title: {
    fontSize: 30,
    color: "#172B4D",
    fontWeight: "700",
    marginTop: "7%"
  },
  searchbar: {
    borderRadius: 13,
    backgroundColor: "white",
    width: "85%",
    height: "26%",
    marginTop: "6%",
    marginBottom: "-6%"
  }
})