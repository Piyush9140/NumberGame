import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StartGameScreen></StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
