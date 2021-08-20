import React, { useEffect, useState } from "react";
import { Platform, SafeAreaView, Text } from "react-native";
import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import { Audio } from "expo-av";
import { useIsFocused } from "@react-navigation/core";
import styles from "./styles";

export default function CameraScreen() {
  const [hasCameraPermissions, setHasCameraPermissions] = useState(false);
  const [hasAudioPermissions, setHasAudioPermissions] = useState(false);
  const [hasGalleryPermissions, setHasGalleryPermissions] = useState(false);

  const [galleryItems, setGalleryItems] = useState([]);

  const [cameraRef, setCameraRef] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [cameraFlash, setCameraFlash] = useState(
    Camera.Constants.FlashMode.off
  );

  const [isCameraReady, setIsCameraReady] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestPermissionsAsync();
      setHasCameraPermissions(cameraStatus.status == "granted");
      const audioStatus = await Audio.requestPermissionsAsync();
      setHasAudioPermissions(audioStatus.status == "granted");
      const GalleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermissions(cameraStatus.status == "granted");

      if (GalleryStatus.status == "granted" && Platform.OS !== "web") {
        const userGalleryMedia = await MediaLibrary.getAssetsAsync({
          sortBy: ["creationTime"],
          mediaType: ["video"],
        });
        setGalleryItems(userGalleryMedia);
      }
    })();
  }, []);

  if (!hasCameraPermissions || !hasAudioPermissions || !hasGalleryPermissions) {
    //   console.log(hasCameraPermissions);
    //   console.log(hasAudioPermissions);
    //   console.log(hasGalleryPermissions);
    return <SafeAreaView></SafeAreaView>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {isFocused ? (
        <Camera
          ref={(ref) => setCameraRef(ref)}
          ratio={"16:9"}
          style={styles.camera}
          type={cameraType}
          flashMode={cameraFlash}
          onCameraReady={() => setIsCameraReady(true)}
        />
      ) : null}
    </SafeAreaView>
  );
}
