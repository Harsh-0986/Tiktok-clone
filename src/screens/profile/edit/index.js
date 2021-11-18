import React from "react";
import { Text } from "react-native";
import GeneralNavbar from "../../../components/general/Navbar";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <GeneralNavbar />
    </SafeAreaView>
  );
}
