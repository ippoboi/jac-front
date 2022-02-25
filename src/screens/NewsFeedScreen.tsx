import { Text, View, StyleSheet, FlatList } from 'react-native'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import dataTest from '../dataTest.json'

export default function NewsFeedScreen({navigation}: NativeStackHeaderProps) {

    const renderItem = ({item} :any) => (
      <View>
        <Text>{item.title}</Text>
      </View>
    )

    return (
      <View style={styles.container}>
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
    padding: 20,
  }
})