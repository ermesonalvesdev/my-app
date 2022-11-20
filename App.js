import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

// import components 
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const Placehodler = require('./assets/Placeholder.png');

  export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      alert('Image selecionda com sucesso!');
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('Error na imagem selecionada!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Selecione sua image!</Text>
      <ImageViewer 
      placeholderImageSource={Placehodler}
      selectedImage={selectedImage}
      />
      <View style={styles.footerContainer}>
      <Button theme="primary" onPress={pickImageAsync} />
        {/* <Button label="Use this photo" /> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  Text: {
    color: '#fff',
    fontSize: '20',
    fontWeight: '400',
  },
});
