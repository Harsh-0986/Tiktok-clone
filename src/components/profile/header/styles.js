import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
  },
  counterContainer: {
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  emailText: {
    padding: 20,
  },
  counterItemContainer: {
    flex: 1,
    alignItems: "center",
  },
  counterNumberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  counterLabelText: {
    color: "gray",
    fontSize: 11,
  },
});

export default styles;
