import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet,TouchableOpacity } from 'react-native';



export default function App() {
  const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
  
    const handlePasswordChange = () => {
      // Here, you can implement the logic to update the password
      
      console.log(`New Password: ${newPassword}, Confirm Password: ${confirmNewPassword}`);
    };
  
    return (
      <View style={styles.container}>
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
              <Text style={{ color: "white", fontWeight: "bold" }}>
                SET PASSWORD
              </Text>
            </View>
            <View
              style={{
                width: "40%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
            </View>
          </TouchableOpacity>
        
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    borderColor: 'gray',
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
