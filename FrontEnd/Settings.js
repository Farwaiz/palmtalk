import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.topic}>
        <StatusBar style="auto" />
        <Text style={styles.heading}> SETTINGS</Text>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("User")}
        >
          <Text style={styles.but1txt}>PROFILE SETTINGS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}>
          <Text style={styles.but2txt}>PERMISSION SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.but3txt}>FONT AND TEXT</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <Image
          source={require("./assets/palmtalk.png")}
          style={{ width: 120, height: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  heading: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 40,
    marginTop: 170,
    marginLeft: 92,
  },
  buttonArea: {
    marginTop: 40,
    padding: 50,
  },
  but1txt: {
    color: "white",
    fontSize: 11,
    marginLeft: 70,
    letterSpacing: 1.2,
    marginTop: 5,
  },
  button1: {
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 7,
    height: 55,
  },
  but2txt: {
    color: "white",
    fontSize: 11,
    marginLeft: 70,
    letterSpacing: 1.2,
    marginTop: 5,
  },
  button2: {
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 7,
    height: 55,
    marginTop: 25,
  },
  but3txt: {
    color: "white",
    fontSize: 11,
    marginLeft: 70,
    letterSpacing: 1.2,
    marginTop: 5,
  },
  button3: {
    padding: 15,
    backgroundColor: "orange",
    borderRadius: 7,
    height: 55,
    marginTop: 25,
  },
  icon: {
    marginLeft: 150,
    marginTop: 50,
  },
});
