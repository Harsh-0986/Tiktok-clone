import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";

const FeedScreen = () => {
  const array = [1, 2, 3, 4, 5];
  const renderItem = ({ item, index }) => {
    return (
      <View
        style={[
          {
            flex: 1,
            minHeight: Dimensions.get("window").height,
          },
          index % 2 == 0
            ? { backgroundColor: "blue" }
            : { backgroundColor: "pink" },
        ]}
      >
        <Text>{item}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item) => item}
        decelerationRate={"fast"}
      />
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
