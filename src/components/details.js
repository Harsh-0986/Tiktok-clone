import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import detailStyle from "./detailsStyles";
import { useDispatch } from "react-redux";
import { login, register } from "../redux/actions";
import firebase from "firebase";

export default function AuthDetails({ setDetailsPage, authPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const dispatch = useDispatch();
  const db = firebase.firestore();

  const handleLogin = () => {
    dispatch(login(email, password))
      .then(() => {
        console.log("login Success");
      })
      .catch(() => {
        console.log("login unsuccess");
      });
  };

  const handleRegister = () => {
    dispatch(register(email, password))
      .then(() => {
        db.collection("user").doc(firebase.auth().currentUser.uid).set({
          email: email,
          emailVerified: firebase.auth().currentUser.emailVerified,
          displayName: displayName,
        });
      })
      .catch(() => {
        console.log("register unsuccessful");
      });
  };

  return (
    <SafeAreaView style={detailStyle.container}>
      <TouchableOpacity onPress={() => setDetailsPage(false)}>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      {authPage == 1 ? (
        <TextInput
          onChangeText={(text) => setDisplayName(text)}
          placeholder="Display Name"
          style={detailStyle.textinput}
        />
      ) : null}
      <TextInput
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        style={detailStyle.textinput}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        secureTextEntry
        style={detailStyle.textinput}
      />
      <TouchableOpacity
        style={detailStyle.button}
        onPress={() => (authPage == 0 ? handleLogin() : handleRegister())}
      >
        <Text style={detailStyle.buttonText}>
          {authPage == 0 ? "Sign In" : "Sign Up"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
