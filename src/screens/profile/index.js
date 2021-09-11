import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import ProfileNavbar from "../../components/profile/navbar/";
import styles from "./styles";

export default function Profile() {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileNavbar user={currentUser} />
    </SafeAreaView>
  );
}
