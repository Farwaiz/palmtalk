import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
  const [isGo, setIsGo] = useState(false);

  useEffect(() => {
    if (isGo === false) {
      setTimeout(() => {
        navigation.navigate("Login");
        setIsGo(true);
      }, 2000);
    }
  }, [isGo]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image style={styles.logo} source={require("./assets/palmtalk.png")} />
      </View>
      <View>
        <Text style={styles.txt}>POWERED BY TEAM STATIC</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    marginTop: 250,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 200,
  },
  txt: {
    marginTop: 350,
    marginLeft: 70,
    fontSize: 20,
    color: "#808080",
    alignItems: "center",
  },
});
