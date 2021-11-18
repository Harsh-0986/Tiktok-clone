import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function ProfilePostListItem({ item }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.media[1] }} style={styles.image} />
    </View>
  );
}
