import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Image, Switch , } from 'react-native';





export default function App() {
  const[isEnabled, setIsEnabled] = useState(true);
  const [text, setText] = useState('Press the switch!');

  const [sliderValue, setSliderValue] = useState(0);



  const toggleSwitch = () =>{
    if (isEnabled) {
      setText('Inactive')
    } else{
      setText('Active')
    }
    setIsEnabled(previousState => !previousState)
  } 

  
  
  return (
    <View style={styles.container}>
        
         <Text style = {{fontSize:35,color:'#fabd02',marginTop:60,
    marginLeft:100,}}>FONT / TEXT</Text>
      
    

    <View style={styles.space}/>

    <View style={styles.text1}>
      <Text style = {{fontSize:15,color:'#000000',marginTop:60,
    marginLeft:100,}}>MAIN TEXT LOOKS LIKE THIS</Text>
    </View>

    <View style={styles.space1}/>

    <View style={styles.border1}>
    <View style={styles.text2}>
      <Text style = {{fontSize:20,color:'#000000',marginLeft:50,}}>FONT STYLE</Text>
      <Text style = {{fontSize:15,color:'#fabd02',marginLeft:50,}}>DEFAULT</Text>
      <Text style = {{fontSize:20,color:'#000000',marginLeft:50,top:35}}>BOLD FONT</Text>
      <Switch
        trackColor={{false: 'grey', true:'#fabd02'}}
        thumbColor={isEnabled ? '#fabd02' : '#fabd02'}
        ios_backgroundColor='grey'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    
    </View>

    <View style={styles.border}>
    <View style={styles.text2}>
      <Text style = {{fontSize:20,color:'#000000',marginLeft:50,}}>FONT SIZE</Text>
    </View>

    </View>
    <Image
        style={{width: 120,
          height: 100,left:130,top:60}}
        source={require('../PalmTalk/assets/palmtalk.png')}
      />
</View>
        
      
      
  );
}


const styles = StyleSheet.create({
  container:{
    
    flexDirection:'column',
  },

  border1:{
    borderWidth: 2,
    borderColor:'#fabd02',
    left:25,
    width:350,
    radius:2,
    padding:15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },

  text2:{
    marginLeft:-30,
  },

  space: {
    height: 50,
  },

  space1: {
    height: 150,
  },

  border: {
    top: 15,
    borderWidth: 2,
    borderColor:'#fabd02',
    left:25,
    width:350,
    radius:2,
    padding:15,
    radius:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  },


});