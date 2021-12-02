import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SearchUserItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{item.displayName}</Text>
      <Image source={{ uri: item.photoURL }} style={styles.image} />
    </TouchableOpacity>
  );
};

export default SearchUserItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  image: {
    backgroundColor: "gray",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
