import firebase from "firebase";
import { saveMediaToStorage } from "./random";
require("firebase/firebase-auth");
require("firebase/firestore");
import uuid from "uuid-random";

export const createPost = (description, video, thumbnail) => (dispatch) =>
  new Promise((resolve, reject) => {
    let storagePostId = uuid();
    let allSavePromises = Promise.all([
      saveMediaToStorage(
        video,
        `post/${firebase.auth().currentUser.uid}/${storagePostId}/video`
      ),
      saveMediaToStorage(
        thumbnail,
        `post/${firebase.auth().currentUser.uid}/${storagePostId}/thumbnail`
      ),
    ]);

    allSavePromises
      .then((media) => {
        firebase
          .firestore()
          .collection("post")
          .add({
            creator: firebase.auth().currentUser.uid,
            media,
            description,
            likesCount: 0,
            commentsCount: 0,
            creation: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then(() => resolve())
          .catch(() => reject());
      })
      .catch(() => reject());
  });
