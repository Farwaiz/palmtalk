import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, TextInput } from "react-native";

export default function App() {
  return (
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
            placeholder="Enter Your Email Here"
            underlineColorAndroid="transparent"
          />
        </View>

        <Text style={{ color: "#8F92A1", fontSize: 12, paddingTop: 20 }}>
          Username
        </Text>

        <View style={styles.sectionStyle}>
          <Image
            source={require("./assets/favicon.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Your Username Here"
            underlineColorAndroid="transparent"
          />
        </View>

        <Text style={{ color: "#8F92A1", fontSize: 12, paddingTop: 20 }}>
          Password
        </Text>

        <View style={styles.sectionStyle}>
          <Image
            source={require("./assets/favicon.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Enter Your Password Here"
            underlineColorAndroid="transparent"
          />
        </View>

        <Text style={{ color: "#8F92A1", fontSize: 12, paddingTop: 20 }}>
          Confirm Password
        </Text>

        <View style={styles.sectionStyle}>
          <Image
            source={require("./assets/favicon.png")}
            style={styles.imageStyle}
          />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Re-Enter Your Password e"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
  },
  logoContainer: {
    alignItems: "center",
  },

  stretch: {
    width: 140,
    height: 120,
    resizeMode: "stretch",
  },
  loginInputContainer: {
    paddingTop: 50,
    paddingLeft: 50,
    paddingRight: 50,
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
});
