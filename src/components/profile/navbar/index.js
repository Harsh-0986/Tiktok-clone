import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function ProfileNavbar({ user }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={20} />
      </TouchableOpacity>
      <Text style={styles.text}>{user?.displayName}</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
