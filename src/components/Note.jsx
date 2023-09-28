import { Image, StyleSheet, Text, View } from "react-native";

const Note = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <View style={styles.starAndTitle}>
            <Image
              style={styles.starImg}
              source={require("../assets/star.png")}
            />
            <Text style={styles.title}>TITULO DE EJEMPLO</Text>
          </View>
          <Image
            style={styles.starImg}
            source={require("../assets/danger.png")}
          />
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
    paddingHorizontal: 12,
    width: "100%",
  },
  line: {
    width: "100%",
    height: "0.10%",
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
    marginTop: 15,
    justifyContent: "space-between",
  },
  noteDescription: {
    fontWeight: "bold",
    fontSize: 9.33,
  },
  title: {
    fontWeight: "bold",
    fontSize: 9,
  },
  p: {
    fontSize: 8.5,
  },
  starImg: {
    width: 12.5,
    height: 12.5,
  },
});

export default Note;
