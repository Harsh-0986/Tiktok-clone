import React, { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

export default function SavePost(props) {
  const [caption, setCaption] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* For Caption and preview */}
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Enter a caption"
          multiline
          style={styles.caption}
          maxLength={150}
          onChangeText={(text) => setCaption(text)}
        />
        <Image
          style={styles.mediaPreview}
          source={{ uri: props.route.params.source }}
        />
      </View>
      {/* Spacer */}
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.spacer}
      >
        <View />
      </TouchableWithoutFeedback>
      {/* For Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.cancelButton}
        >
          <Feather name="x" size={24} color="white" />
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.postButton}
        >
          <Feather name="corner-left-up" size={24} color="black" />
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
