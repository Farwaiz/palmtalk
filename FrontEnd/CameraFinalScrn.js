import React, {useState,useEffect, useRef} from 'react';
import{Text, View, Button, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import axios from 'axios';


const API_KEY = 'AIzaSyCb3Cv05KJyK6d44riXzOOhrrUsTz_UjCQ';

export default function App(){
  const [hasGalleryPermission, setGalleryPermission] = useState(null);
  const [hasCameraPermission, setCameraPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const cameraRef = useRef(null);
  const [translatedText, setTranslatedText] = useState('');

  const url = "https://us-central1-palmtalk-testing.cloudfunctions.net/predict"

  const sendImageToGCP = async () => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", {
        uri: image,
        name: "image.jpg",
        type: "image/jpg",
      });

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setData(response.data.class);
      setLoading(false);
      console.log(response.data.class);
    } catch (error) {
      console.error(error);
    }
  };

useEffect(() => {
  const translate = async () => {
    try {
      const response = await axios.get(
        `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}&q=${data}&target=si`
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
      retakePicture();
      setImage(null)
    } catch (error) {
      console.error(error);
    }
  };
  if (data) {
    translate();
    
  } else {
    setTranslatedText('');
  }
}, [data]);


  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setGalleryPermission(galleryStatus.status === 'granted');

      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      setImage(photo.uri);
    }
  };

  const retakePicture = () => {
    setImage(null);
  };


  if(hasGalleryPermission === false || hasCameraPermission === false){
    return <Text>No access to Internal Storage or Camera.</Text>
  }

  return (
    <View style={{ flex: 1, top:50 }}>
    
      {image ? (
        <Image source={{ uri: image }} style={{ flex: 1 / 2 }} />
      ) : (
        <Camera  style={{ flex: 1/2}} ref={cameraRef}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
          
          </View>
        </Camera>
      )}
      <View style={{top:30}}>
      <View style={[{ width: "90%", margin: 10,left:10, backgroundColor: "red" }]}>
      <Button
              title="Take Picture"
              onPress={() => takePicture()}
              style={{ marginTop: 30,  }}
            />
      </View>
      <View style={[{ width: "90%", margin: 10, left:10, backgroundColor: "red" }]}>
        <Button title="Pick Image" onPress={() => pickImage()} />
      </View>
      <View style={[{ width: "90%", margin:10,left:10, }]}>
      <Button
        title="Send Image to GCP"
        onPress={() => sendImageToGCP()}
        disabled={!image}
      />
      </View>
      </View>
      <View>
      <View style={{position:'absolute', borderTopWidth:3,borderTopRightRadius:10,borderTopLeftRadius:10,borderColor:'#FBB03B',top:10,backgroundColor:'#FBB03B',height:300,top:40,width:'100%'}}>
      <View style={{top:20,justifyContent: 'center',alignItems:'center'}}>  
      {loading && <Text>Loading...</Text>}
      {!loading && data && <Text style={{fontSize:20,color:'white'}}> Class: {data}</Text>}
      {!loading && data && <Text style={{fontSize:20,color:'white'}}>{translatedText}</Text>}
      </View>
      </View>
      
    </View>
    </View>
  );
}




