import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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

export default function ProfileScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("http://10.0.2.2:3000/profile", { credentials: "include" })
      .then((response) => response.json())
      .then((data) => {
        setName(data.data.username);
        setEmail(data.data.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.buttontext1}>ADD ANOTHER ACCOUNT</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.space} />
      <View style={styles.border}>
        <Image
          source={require("./assets/profile.jpg")}
          style={styles.stretch}
        />
      </View>
      <View style={styles.space} />
      <View style={styles.name}>
        <Text style={styles.username}>Name :{name}</Text>
        <Text style={styles.email}>Email :{email}</Text>
      </View>
      <View style={styles.space} />
      <TouchableOpacity>
        <View style={styles.buttons}>
          <Text style={styles.buttontext}>CHANGE PASSWORD</Text>
          onPress={() => navigation.navigate("UpdatePassword")}
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
  username: {
    marginLeft: -30,
    fontWeight: "bold",
  },
  email: {
    marginLeft: -30,
    paddingTop: 15,
    fontWeight: "bold",
  },
});
