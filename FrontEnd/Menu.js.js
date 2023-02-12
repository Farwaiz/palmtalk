import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    resizeMode: 'center',
    position: 'absolute',
    top: 0,
  },
  buttons:{ 
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 14,
    backgroundColor: '#fabd02',
    bottom: 150,
    marginLeft: 30,
    marginRight: 30,
  },
  space: {
    width: 10,
    height: 10,
  },

  buttontext: {
    color: 'white',
    fontSize: 8,
    textAlign: 'center',
    
  },
});

const Display = () => {
  return (
    <><View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../AwesomeProject/assets/PalmTalk.png')} />
    </View>

    <TouchableOpacity>
      <View style={styles.buttons}>
        <Text style={styles.buttontext}>Sign Language To Sinhala Text</Text>
      </View>
    </TouchableOpacity>

    <View style={styles.space} />

    <TouchableOpacity>
      <View style={styles.buttons}>
        <Text style={styles.buttontext}>History</Text> 
      </View>
    </TouchableOpacity>

    <View style={styles.space} />

    <TouchableOpacity>
      <View style={styles.buttons}>
        <Text style={styles.buttontext}>Setting</Text> 
      </View>
    </TouchableOpacity>

    <View style={styles.space} />

    <TouchableOpacity>
      <View style={styles.buttons}>
        <Text style={styles.buttontext}>About Us</Text> 
      </View>
    </TouchableOpacity></>

  );
}

export default Display;



