import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import GeneralNavbar from "../../../../components/general/Navbar/index";
import { Divider } from "react-native-paper";
import { generalStyles } from "../../../../styles";
import { saveUserField } from "../../../../services/user";
import { useNavigation } from "@react-navigation/native";

export default function EditProfileFieldScreen({ route }) {
  const { title, field, value } = route.params;
  const [textInputValue, settextInputValue] = useState(value);
  const navigation = useNavigation();

  const onSave = () => {
    saveUserField(field, textInputValue).then(() => {
      navigation.goBack();
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <GeneralNavbar
        title={title}
        rightButton={{ display: "true", name: "save", action: onSave }}
      />
      <Divider />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={generalStyles.textInput}
          value={textInputValue}
          onChangeText={settextInputValue}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainContainer: {
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    color: "gray",
  },
});
