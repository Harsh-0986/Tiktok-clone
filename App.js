import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import firebase from "firebase/app";
import Constants from "expo-constants";

// Redux dependencies
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers";

//Screens
import AuthScreen from "./src/screens/auth";
import Route from "./src/navigation/main";

// Firebase App initialization
if (firebase.apps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

// Redux
const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}
