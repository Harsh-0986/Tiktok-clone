import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "white",
  },
  formContainer: {
    margin: 20,
    flexDirection: "row",
  },
  caption: {
    paddingVertical: 20,
    marginRight: 20,
    flex: 1,
  },
  mediaPreview: {
    aspectRatio: 9 / 16,
    backgroundColor: "black",
    width: 60,
  },
  spacer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    margin: 20,
  },
  cancelButton: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "red",
    marginRight: 10,
  },
  cancelButtonText: {
    marginLeft: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  postButton: {
    alignItems: "center",
    flex: 1,
    borderColor: "lightgray",
    borderWidth: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 10,
  },
  postButtonText: {
    marginLeft: 5,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
