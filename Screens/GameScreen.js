import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Titles from "../components/Titles";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogs from "../components/game/GuessLogs";

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
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  useEffect(() => {
    if (currentGuess === UserNum) {
      OnGameOver(guessRounds.length);
    }
  }, [currentGuess, UserNum, OnGameOver]);
  useEffect(() => {
    let minBoundry = 1;
    let maxBoundry = 100;
  }, []);

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
    setGuessRounds((previorsGuess) => [newNo, ...previorsGuess]);
  }
  const GuessRoundListLength = guessRounds.length;
  return (
    <View style={styles.screen}>
      <Titles>Opponent's Guess</Titles>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructiontext}>
          Higher or Lower
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              <Ionicons name="md-add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <FlatList
        data={guessRounds}
        renderItem={(itemData) => (
          <GuessLogs
            roundNumber={GuessRoundListLength - itemData.index}
            guess={itemData.item}
          />
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 35,
  },
  instructiontext: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
