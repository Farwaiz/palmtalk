import React from "react";
import { StyleSheet } from "react-native";
import Settings from "./Settings";
import About from "./About";
import Register from "./Register";
import Router from "./Router";
import Camera from "./CameraFinalScrn.js";

const App = () => {
  return <Router />;
};

export default App;
const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
});
