import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import colors from "../constants/colors";
import Titles from "../components/Titles";
import Card from "../components/card";
import InstructionText from "../components/InstructionText";

const StartGameScreen = ({ OnPickedNum }) => {
  const [enterNum, SetEnterNum] = useState("");
  console.log(enterNum);
  function NumInputHandler(enteredText) {
    SetEnterNum(enteredText);
  }
  function ResetInputHandler() {
    SetEnterNum("");
  }
  function confirmInputHandler() {
    const chosenNum = parseInt(enterNum);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert(
        "Invalid Number",
        "Number has to be a number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: ResetInputHandler }]
      );
    } else OnPickedNum(chosenNum);
  }
  return (
    <View style={styles.rootContainer}>
      <Titles>Guess My Number</Titles>
      <Card>
        <InstructionText >Enter a Number</InstructionText>
        <TextInput
          style={styles.InputArea}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enterNum}
          onChangeText={NumInputHandler}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={ResetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
  },
  InputArea: {
    height: 50,
    width: 50,
    textAlign: "center",
    color: colors.accent500,
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent500,
    alignSelf: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
