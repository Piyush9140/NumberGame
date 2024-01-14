import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
export default function App() {
  const [userInput, SetUserNum] = useState();

  function PickedNum(enteredNum) {
    SetUserNum(enteredNum);
  }
  let screen = <StartGameScreen OnPickedNum={PickedNum} />;
  if (userInput) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.Backgroundimage}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Backgroundimage: {
    opacity: 0.15,
  },
});
