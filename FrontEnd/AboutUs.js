import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.abTopic}>
        <StatusBar style="auto" />
        <Text style={styles.heading}> ABOUT US</Text>
      </View>
      <View style={styles.descArea}>
        <Text style={styles.desc1}>
          WELCOME TO PALMTALK, THE REVOLUTIONARY MOBILE APPLICATION THAT IS
          REVOLUTIONIZING THE WAY WE COMMUNICATE WITH THE DEAF AND HARD OF
          HEARING COMMUNITY. OUR APP IS DESIGNED TO TRANSLATE SINHALA SIGN
          LANGUAGE (SSL) INTO SINHALA TEXT, MAKING COMMUNICATION BETWEEN THOSE
          WHO USE SSL AND THOSE WHO DO NOT AS SEAMLESS AS POSSIBLE.from team
          static
        </Text>
        <Text style={styles.desc2}>
          OUR TEAM IS MADE UP OF A GROUP OF UNIVERSITY STUDENTS WHO ARE
          PASSIONATE ABOUT HELPING BRIDGE THE COMMUNICATION GAP BETWEEN THE DEAF
          AND HEARING COMMUNITIES. WE HAVE WORKED TIRELESSLY TO CREATE AN APP
          THAT IS USER-FRIENDLY, ACCURATE, AND ACCESSIBLE TO ALL.
        </Text>
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
  descArea: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
  },
  desc1: {
    //fontWeight: "bold",
    letterSpacing: 1.2,
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
  },
  desc2: {
    //fontWeight: "bold",
    letterSpacing: 1.2,
    fontSize: 13,
    textAlign: "center",
    padding: 10,
    lineHeight: 18,
  },
});
