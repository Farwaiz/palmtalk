import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Image, ImageBackground } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "./About";
const Stack = createNativeStackNavigator();
function HomeScreen() {
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
          onPress={() => navigation.navigate("About")}
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
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
