import React from "react";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import ProfileHeader from "../../components/profile/header";
import ProfileNavbar from "../../components/profile/navbar/";
import ProfilePostList from "../../components/profile/postsList";
import styles from "./styles";

export default function Profile() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const currentUserPosts = useSelector((state) => state.posts.currentUserPosts);

  return (
    <SafeAreaView style={styles.container}>
      <ProfileNavbar user={currentUser} />
      <ProfileHeader user={currentUser} />
      <ProfilePostList posts={currentUserPosts} />
    </SafeAreaView>
  );
}
