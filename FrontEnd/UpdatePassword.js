import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigation = useNavigation();
  const handlePasswordChange = () => {
    // Here, you can implement the logic to update the password
    //navigation.goBack();
    console.log(
      `New Password: ${newPassword}, Confirm Password: ${confirmNewPassword}`
    );
    if (!oldPassword) {
      alert("Please enter your old Password");
      return;
    }
    if (!newPassword) {
      alert("Please enter your New Password");
      return;
    }
    if (!confirmNewPassword) {
      alert("Please re-enter your New Password");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match. Please try again");
      setConfirmNewPassword("");
    }
    if (newPassword === confirmNewPassword) {
      setoldPassword("");
      setNewPassword("");
      setConfirmNewPassword;
      //navigation.navigate("Menu");
      navigation.goBack();
      _submitData();
    }
  };
  const _submitData = async () => {
    fetch("http://10.0.2.2:3000/update-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword,
        newPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Password updated successfully");
        setoldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        navigation.goBack();
      })
      .catch((error) => {
        console.error(error);
        alert("Password update failed. Please try again later");
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setoldPassword}
        value={oldPassword}
        placeholder="Enter old Password"
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        onChangeText={setNewPassword}
        value={newPassword}
        placeholder="Enter new password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        onChangeText={setConfirmNewPassword}
        value={confirmNewPassword}
        placeholder="Re-enter new password"
        secureTextEntry
      />
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
        onPress={handlePasswordChange}
      >
        <View
          style={{
            width: "60%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>CONFIRM</Text>
        </View>
        <View
          style={{
            width: "40%",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        ></View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
