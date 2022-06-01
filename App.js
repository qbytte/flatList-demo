import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "R2-D2" },
          { key: "Omar Loyo" },
          { key: "Ricardo Rico" },
          { key: "Roberto Luna" },
          { key: "Javier Valles" },
          { key: "Jorge Sanchez" },
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
