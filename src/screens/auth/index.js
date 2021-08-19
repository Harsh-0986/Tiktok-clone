import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import AuthDetails from "../../components/details.js";
import AuthMenu from "./components/AuthMenu.js";
import styles from "./styles.js";

export default function AuthScreen() {
  const [authPage, setAuthPage] = useState(0);
  const [detailsPage, setDetailsPage] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {detailsPage ? (
        <AuthDetails authPage={authPage} setDetailsPage={setDetailsPage} />
      ) : (
        <AuthMenu
          authPage={authPage}
          setAuthPage={setAuthPage}
          detailsPage={detailsPage}
          setDetailsPage={setDetailsPage}
        />
      )}
    </SafeAreaView>
  );
}
