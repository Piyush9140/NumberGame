import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Titles from "../components/Titles";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
const GameScreen = (UserNum) => {
  const initialGuess= generateRandomBetween(1,100,UserNum)
  const[currentGuess,setCurrentGuess]=useState(initialGuess)
  return (
    <View style={styles.screen}>
      <Titles>Opponent's Guess</Titles>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        {/* + - */}
      </View>
      {/* <View>LG Rounds</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
  },
});
