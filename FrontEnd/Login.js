import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      setPassword("");
      return;
    }

    fetch("http://10.0.2.2:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "SUCCESS") {
          navigation.navigate("Menu");
          setPassword("");
          setEmail("");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        alert("An error occurred while signing in");
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={{ marginTop: 70 }}>
          <Image
            source={require("./assets/palmtalk.png")}
            style={{ width: 120, height: 100 }}
          />
        </View>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.heading}>Let's Sign You In</Text>
        <Text style={styles.subHeading}>Welcome back, you've been missed!</Text>
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("./assets/person.png")} />
              <TextInput
                placeholder="Enter Email"
                style={{ ...styles.input, width: "90%" }}
                onChangeText={setEmail}
                value={email}
              />
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={{ flexDirection: "row" }}>
              <Image source={require("./assets/lock.png")} />
              <TextInput
                placeholder="Enter Password"
                style={{ ...styles.input, width: "80%" }}
                onChangeText={setPassword}
                secureTextEntry={isSecureEntry}
                value={password}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev) => !prev);
                }}
              >
                <Image source={require("./assets/eye.png")} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "orange",
              padding: 20,
              marginTop: 10,
              display: "flex",
              flexDirection: "row",
              borderRadius: 10,
              justifyContent: "center",
              width: "100%",
            }}
            onPress={handleSignIn}
          >
            <View
              style={{
                width: "60%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                SIGN IN
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Image source={require("./assets/log-in.png")} />
            </View>
          </TouchableOpacity>
          <View style={{ alignSelf: "center" }}>
            <Text
              style={{
                fontSize: 18,
                color: "grey",
                paddingTop: 10,
              }}
            >
              Don't have an account? &nbsp;
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Register");
                  setPassword("");
                  setEmail("");
                }}
              >
                <Text style={{ fontWeight: "bold", color: "black" }}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
          <View style={styles.socialLoginContainer}>
            <View style={styles.socialImageContainer}>
              <Image source={require("./assets/googleLogo.png")} />
            </View>
            <View style={styles.socialImageContainer}>
              <Image source={require("./assets/fblogo.png")} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: -50,
    flex: 1,
  },
  logoContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  signInContainer: {
    flex: 3,
    marginHorizontal: 40,
  },
  formContainer: {
    padding: 10,
  },
  socialLoginContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  socialImageContainer: {
    marginHorizontal: 10,
  },
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#8F92A1",
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 15,
    color: "grey",
    paddingTop: 10,
  },
  input: {
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 13,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 17,
    color: "grey",
    paddingTop: 10,
    fontWeight: "bold",
  },
});
