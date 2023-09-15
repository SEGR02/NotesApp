import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import Note from "./Note";

export default function Template({ backgroundColor, star, title }) {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    navbar: {
      paddingTop: Constants.statusBarHeight + 10,
      paddingHorizontal: 10,
      width: "100%",
      height: "10%",
      backgroundColor: backgroundColor,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    sectionTitle: {
      color: "#fff",
      fontSize: 20,
      fontFamily: "Kalam",
    },
    button: {
      position: "absolute",
      bottom: 50,
      marginHorizontal: 20,
      width: 65,
      height: 65,
      backgroundColor: "#fff",
      borderRadius: 100,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      elevation: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <FontAwesome name="bars" size={20} color="white" />
        <Text style={styles.sectionTitle}>{title}</Text>
        <FontAwesome name="sort-amount-desc" size={20} color="white" />
      </View>
      <Note star={star} />
      <Note star={star} />
      <View style={styles.button}>
        <FontAwesome
          style={{ marginLeft: 7 }}
          name="pencil-square-o"
          size={40}
          color="black"
        />
      </View>
    </View>
  );
}
