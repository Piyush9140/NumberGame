import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Titles from "../components/Titles";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundry = 1;
let maxBoundry = 100;
const GameScreen = ({ UserNum, OnGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, UserNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === UserNum) {
      OnGameOver();
    }
  }, [currentGuess, UserNum, OnGameOver]);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < UserNum) ||
      (direction === "greater" && currentGuess > UserNum)
    ) {
      Alert.alert("Don't lie", "you Know thst this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess - 1;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newNo = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(newNo);
  }
  return (
    <View style={styles.screen}>
      <Titles>Opponent's Guess</Titles>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
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
