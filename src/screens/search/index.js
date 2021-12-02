import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchUserItem from "../../components/search/userItem";
import { queryUsersByEmail } from "../../services/user";

const SearchScreen = () => {
  const [textInput, setTextInput] = useState("");
  const [searchUsers, setSearchUsers] = useState([]);
  useEffect(() => {
    queryUsersByEmail(textInput).then(setSearchUsers);
  }, [textInput]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setTextInput}
        style={styles.textInput}
        placeholder="Search"
      />
      <FlatList
        data={searchUsers}
        renderItem={SearchUserItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textInput: {
    backgroundColor: "lightgray",
    padding: 5,
    margin: 10,
    borderRadius: 5,
  },
});
