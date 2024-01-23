import { StatusBar } from "expo-status-bar";
import { Button, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./Screens/GameScreen";
import colors from "./constants/colors";
import GameOverScreen from "./Screens/GameOverScreen";
export default function App() {
  const [userNum, SetUserNum] = useState();
  const [GameOver,setGameIsOver]=useState(true);
  const [RoundCount,setRoundCount]=useState(0);

  function PickedNum(enteredNum) {
    SetUserNum(enteredNum);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen OnPickedNum={PickedNum} />;
  if (userNum) {
    screen = <GameScreen UserNum={userNum} OnGameOver={GameOverHandler}/>;
  }
  if(GameOver&&userNum){
    screen=<GameOverScreen userNum={userNum} RoundCount={RoundCount} RestartGame={StartNewGAmeHandler}/>
  }
  function GameOverHandler(RoundN0){
    setGameIsOver(true);
    setRoundCount(RoundN0);
  }
  function StartNewGAmeHandler(){
    SetUserNum(null);
    setRoundCount(0);
  }
  return (
    <LinearGradient colors={[colors.primary700,colors.accent500]} style={styles.container}>
      <ImageBackground
        source={require("./assets/images/background.png")}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.Backgroundimage}
      >
        <SafeAreaView style={styles.container}>
          {screen}
        </SafeAreaView>
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
