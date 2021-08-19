import { StyleSheet } from "react-native";

const detailStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  textinput: {
    borderColor: "lightgray",
    borderBottomWidth: 1,
    borderStyle: "solid",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "ghostwhite",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default detailStyle;
