import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

const ActivityInidicator = ({ visible = false }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    zIndex: 1,
    elevation: 2,
    height: "100%",
    width: "100%",
    opacity: 0.8,
    backgroundColor: "white",
  },
});

export default ActivityInidicator;
