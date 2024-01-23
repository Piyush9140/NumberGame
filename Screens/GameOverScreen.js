import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Titles from "../components/Titles";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

function GameOverScreen({userNum,RoundCount,RestartGame}) {
  return (
    <View style={styles.rootContainer}>
      <Titles>Game Over</Titles>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require("../assets/images/success.png")}
        ></Image>
      </View>
      <Text style={styles.summaryText}>
        Your Phone Needed <Text style={styles.HightlightText}>{RoundCount}</Text> Rounds To
        Guess The Number <Text style={styles.HightlightText}>{userNum}</Text>
      </Text>
      <PrimaryButton onPress={RestartGame}>start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  Image: {
    height: "100%",
    width: "100%",
  },
  summaryText: {
    fontSize: 21,
    textAlign: "center",
    marginBottom: 24,
  },
  HightlightText: {
    fontWeight: "bold",
    color: colors.primary500,
  },
});
