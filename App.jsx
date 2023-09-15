import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { useFonts } from "expo-font";
import Main from "./Main";

export default function App() {
  const [fontsLoaded] = useFonts({
    Kalam: require("./src/assets/fonts/Kalam-Bold.ttf"),
  });
  return (
    <>
      <StatusBar style="auto" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
}
