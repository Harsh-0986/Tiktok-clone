import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Feather } from "@expo/vector-icons";

export default function AuthMenu({
  authPage,
  setAuthPage,
  detailsPage,
  setDetailsPage,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.containerLogin}>
        <Text style={styles.headerText}>
          {authPage == "0" ? "Login" : "Sign Up"}
        </Text>
        <TouchableOpacity
          style={styles.emailProvider}
          onPress={() => setDetailsPage(true)}
        >
          <Feather name="user" size={24} color="black" />
          <Text style={styles.emailProviderText}>
            {authPage == "0" ? "Login with Email" : "Sign Up with Email"}
          </Text>
          <SafeAreaView />
        </TouchableOpacity>
      </SafeAreaView>

      <TouchableOpacity
        style={styles.containerBottomButton}
        onPress={() => (authPage == 0 ? setAuthPage(1) : setAuthPage(0))}
      >
        {authPage == 0 ? (
          <Text>
            Don't have an account?
            <Text style={styles.bottomButtonText}> Sign Up</Text>
          </Text>
        ) : (
          <Text>
            Already have an account?
            <Text style={styles.bottomButtonText}> Login</Text>
          </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}
