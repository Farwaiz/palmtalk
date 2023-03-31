import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

const CreateUser = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const _submitData = async () => {
    fetch("http://10.0.2.2:3000/send-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
        repassword: repassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(`${data.name} is valid successfully!!`);
        navigate("Menu");
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleUsernameChange = (value) => {
    setUserName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleRepasswordChange = (value) => {
    setRepassword(value);
  };

  const handleSubmit = () => {
    if (!email) {
      alert("Please enter your email ");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }
    if (!username) {
      alert("Please enter your Username");
      return;
    }
    if (!password) {
      alert("Please enter your Password");
      return;
    }
    if (!validatePassword(password)) {
      alert(
        "Please enter a password that is at least 8 characters long and contains at least one letter and one number"
      );
      return;
    }
    if (!repassword) {
      alert("Please re-enter your Password");
      return;
    }
    if (password !== repassword) {
      alert("Passwords do not match. Please try again");
      setRepassword("");
    }
    if (password === repassword) {
      setEmail("");
      setUserName("");
      setPassword("");
      setRepassword("");
      navigation.navigate("Menu");
      _submitData();
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.stretch}
            source={require("./assets/palmtalk.png")}
          />
        </View>
        <View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              paddingLeft: 50,
              paddingTop: 50,
            }}
          >
            Getting Started
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "medium",
              paddingLeft: 50,
              paddingTop: 5,
              color: "#171717",
            }}
          >
            Create an account to continue!
          </Text>
        </View>
        <View style={styles.loginInputContainer}>
          <Text style={{ color: "#8F92A1", fontSize: 12 }}>Email</Text>

          <View style={styles.sectionStyle}>
            <Image
              source={require("./assets/mail.png")}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              value={email}
              placeholder="Enter Email"
              underlineColorAndroid="transparent"
              onChangeText={handleEmailChange}
            />
          </View>

          <Text style={{ color: "#8F92A1", fontSize: 12, paddingTop: 20 }}>
            Username
          </Text>

          <View style={styles.sectionStyle}>
            <Image
              source={require("./assets/person.png")}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              value={username}
              placeholder="Enter Username"
              underlineColorAndroid="transparent"
              onChangeText={handleUsernameChange}
            />
          </View>

          <Text style={{ color: "#8F92A1", fontSize: 12, paddingTop: 20 }}>
            Password
          </Text>

          <View style={styles.sectionStyle}>
            <Image
              source={require("./assets/lock.png")}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              value={password}
              placeholder="Enter Password"
              secureTextEntry={isSecureEntry}
              underlineColorAndroid="transparent"
              onChangeText={handlePasswordChange}
            />
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry((prev) => !prev);
              }}
            >
              <Image source={require("./assets/eye.png")} />
            </TouchableOpacity>
          </View>

          <Text style={{ color: "#8F92A1", fontSize: 12, paddingTop: 20 }}>
            Confirm Password
          </Text>

          <View style={styles.sectionStyle}>
            <Image
              source={require("./assets/lock.png")}
              style={styles.imageStyle}
            />
            <TextInput
              style={{ flex: 1 }}
              value={repassword}
              secureTextEntry={isSecureEntry}
              placeholder="Re-Enter Password"
              underlineColorAndroid="transparent"
              onChangeText={handleRepasswordChange}
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
        <TouchableOpacity style={styles.signbt} onPress={handleSubmit}>
          <Text style={styles.bttxt}>SIGN UP</Text>
          <View style={styles.logicon}>
            <Image source={require("./assets/log-in.png")} />
          </View>
        </TouchableOpacity>
        <View style={styles.bottomitem}>
          <Text style={styles.bottomtxt}>
            Already have an account? &nbsp;
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.sgntxt}>Sign in</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  logoContainer: {
    marginTop: -30,
    alignItems: "center",
  },

  stretch: {
    width: 140,
    height: 120,
    resizeMode: "stretch",
  },
  loginInputContainer: {
    paddingTop: 40,
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: -20,
  },
  sectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 0.5,
    height: 40,
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  signbt: {
    backgroundColor: "orange",
    padding: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    width: "75%",
    marginLeft: 50,
  },
  bttxt: {
    marginLeft: 100,
    color: "white",
    marginTop: -1,
    fontWeight: "bold",
  },
  logicon: {
    width: "40%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bottomitem: {
    marginTop: 10,
    alignItems: "center",
  },
  bottomtxt: {
    color: "grey",
    fontSize: 18,
  },
  sgntxt: {
    color: "black",
    fontWeight: "bold",
  },
});

export default CreateUser;
