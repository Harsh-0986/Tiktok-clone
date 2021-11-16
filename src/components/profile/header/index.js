import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Avatar } from "react-native-paper";
import { buttonStyles } from "../../../styles";

export default function ProfileHeader({ user }) {
  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Icon size={80} icon={"account"} />
      <Text style={styles.emailText}>{user?.email}</Text>
      <View style={styles.counterContainer}>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Following</Text>
        </View>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Followers</Text>
        </View>
        <View style={styles.counterItemContainer}>
          <Text style={styles.counterNumberText}>0</Text>
          <Text style={styles.counterLabelText}>Likes</Text>
        </View>
      </View>
      <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
