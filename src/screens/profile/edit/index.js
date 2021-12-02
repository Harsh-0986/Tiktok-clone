import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import GeneralNavbar from "../../../components/general/Navbar";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { saveUserProfileImage } from "../../../services/user";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

export default function EditProfileScreen() {
  const auth = useSelector((state) => state.auth);

  const chooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      saveUserProfileImage(result.uri);
    }
  };

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <GeneralNavbar title="Edit Profile" />
      <View style={styles.imageContainer}>
        <TouchableOpacity
          style={styles.imageViewContainer}
          onPress={() => chooseImage()}
        >
          <Image
            style={styles.image}
            source={{
              uri: auth.currentUser.photoURL,
            }}
          />
          <View style={styles.imageOverlay} />
          <Feather name="camera" size={26} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.fieldsContainer}>
        <TouchableOpacity
          style={styles.fieldItemContainer}
          onPress={() =>
            navigation.navigate("Edit Profile Field", {
              title: "Display Name",
              field: "displayName",
              value: auth.currentUser.displayName,
            })
          }
        >
          <Text>Display name</Text>
          <View style={styles.fieldValueContainer}>
            <Text>{auth.currentUser.displayName}</Text>
            <Feather name="chevron-right" size={20} color="gray" />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
