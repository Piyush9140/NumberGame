import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
function pressHAndler() {
  console.log("Pressed");
}
function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={styles.buttonContainer}
        onPress={pressHAndler}
        android_ripple={{ color: "black" }}
      >
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
   
    backgroundColor: "#72063c",
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 2,
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
});
