import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogin: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    // height: 50,
    fontWeight: "bold",
    fontSize: 25,
    marginTop: 10,
    marginBottom: 25,
    color: "darkslategray",
    textAlign: "center",
  },
  emailProvider: {
    // height: 50,
    borderColor: "lightgray",
    borderWidth: 1,
    borderStyle: "solid",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
  },
  emailProviderText: {
    paddingRight: 20,
  },
  containerBottomButton: {
    backgroundColor: "ghostwhite",
    padding: 20,
    alignItems: "center",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "lightgray",
  },
  bottomButtonText: {
    fontWeight: "bold",
    color: "red",
  },
});

export default styles;
