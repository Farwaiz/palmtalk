import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Image, ImageBackground } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.topic}>
        <StatusBar style="auto" />
        <Text style={styles.heading}> SETTINGS</Text>
      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.but1txt}>PROFILE SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.but2txt}>PERMISSION SETTINGS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3}>
          <Text style={styles.but3txt}>FONT AND TEXTtttt</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon}>
        <Image
          source={require("./assets/ptLogo.png")}
          style={{ width: 120, height: 100 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#ffbf00",
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
    backgroundColor: "#ffbf00",
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
    backgroundColor: "#ffbf00",
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
    backgroundColor: "#ffbf00",
    borderRadius: 7,
    height: 55,
    marginTop: 25,
  },
  icon: {
    marginLeft: 150,
    marginTop: 50,
  },
});
