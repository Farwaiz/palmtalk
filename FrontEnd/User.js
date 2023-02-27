import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function App() {
  const navigation = useNavigation();
  const [name, setname] = useState("");
  const [email, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttontext1}>ADD ANOTHER ACCCOUNT</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.space} />

      <View style={styles.boarder}>
        <Image
          style={styles.stretch}
          source={require("./assets/profile.jpg")}
        />
      </View>

      <View style={styles.space} />

      <View style={styles.textcontainer}>
        <View style={styles.name}>
          <Text style={styles.name}>NAME : </Text>
          <TextInput
            style={styles.namefield}
            onChangeText={setname}
            value={name}
            placeholder="Deepika Sharma"
            keyboardType="text"
          />
          <Text style={styles.eml}>EMAIL : </Text>
          <TextInput
            style={styles.emlfield}
            onChangeText={onChangeText}
            value={email}
            placeholder="Deepika@gmail.com"
            keyboardType="text"
          />
        </View>
      </View>

      <View style={styles.space} />

      <TouchableOpacity>
        <View style={styles.buttons}>
          <Text style={styles.buttontext}>CHANGE PASSWORD</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: 40,
  },

  button: {
    borderRadius: 0,
    marginBottom: 10,
    paddingHorizontal: 25,
    paddingVertical: 14,
    backgroundColor: "#FFFFFF",
    borderColor: "orange",
    borderWidth: 1,
    bottom: 0,
  },

  buttontext1: {
    color: "orange",
    fontSize: 8,
    textAlign: "center",
    letterSpacing: 1.8,
    fontWeight: "bold",
  },

  stretch: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: "#fabd02",
    borderRadius: 200 / 2,
  },

  buttons: {
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 29,
    paddingVertical: 19,
    backgroundColor: "orange",
    bottom: 0,
  },
  buttontext: {
    color: "white",
    fontSize: 11,
    textAlign: "center",
    letterSpacing: 1.8,
  },

  text: {
    padding: 5,
  },

  space: {
    height: 50,
  },

  space1: {
    height: 30,
  },
  name: {
    marginLeft: -30,
    fontWeight: "bold",
  },
  eml: {
    marginLeft: -30,
    paddingTop: 15,
    fontWeight: "bold",
  },
  namefield: {
    marginTop: -25,
    paddingLeft: 30,
  },
  emlfield: {
    marginTop: -25,
    paddingLeft: 30,
  },
});
