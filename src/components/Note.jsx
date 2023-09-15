import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const Note = ({ star }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.starAndTitle}>
            <FontAwesome name={star} size={20} color="#ff2e2c" />
            <Text style={styles.bold}>TITULO DE EJEMPLO</Text>
          </View>
          <FontAwesome name="exclamation" size={20} color="#ff2e2c" />
        </View>
        <Text style={styles.noteDescription}>Nota de demostracion...</Text>
        <View style={styles.timeAndHour}>
          <Text style={styles.p}>25/07/23</Text>
          <Text style={styles.p}>14:37Hs</Text>
        </View>
      </View>
      <View style={styles.line}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: "100%",
  },
  line: {
    width: "100%",
    height: "0.25%",
    backgroundColor: "#dadada",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  starAndTitle: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 5,
  },
  timeAndHour: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
  },
  noteDescription: {
    fontWeight: "bold",
    fontSize: 13,
  },
  bold: {
    fontWeight: "bold",
  },
  p: {
    fontSize: 11,
  },
});

export default Note;
