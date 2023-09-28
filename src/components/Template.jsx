import { Image, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Note from "./Note";

export default function Template({ backgroundColor, star, title }) {
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
    },
    navbar: {
      paddingTop: Constants.statusBarHeight + 10,
      paddingHorizontal: 12,
      width: "100%",
      height: "10%",
      backgroundColor: backgroundColor,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      elevation: 5,
    },
    sectionTitle: {
      color: "#fff",
      fontSize: 16,
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
    newNote: {
      width: "50%",
      height: "50%",
      marginBottom: 5,
    },
    starImg: {
      width: 16,
      height: 16,
      marginBottom: 5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image style={styles.starImg} source={require("../assets/menu.png")} />
        <Text style={styles.sectionTitle}>{title}</Text>
        <Image
          style={styles.starImg}
          source={require("../assets/filter.png")}
        />
      </View>
      <Note star={star} />
      <Note star={star} />
      <View style={styles.button}>
        <Image
          style={styles.newNote}
          source={require("../assets/newNote.png")}
        />
      </View>
    </View>
  );
}
