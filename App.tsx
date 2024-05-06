import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, Image } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [isPalindrom, setIsPalindrom] = useState(false);

  const checkPalindrom = () => {
    // Menghapus spasi dan mengubah ke huruf kecil
    const text = inputText.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

    // Membalikkan teks
    const reversedText = text.split('').reverse().join('');

    // Memeriksa apakah teks asli sama dengan teks yang dibalik
    setIsPalindrom(text === reversedText);

    if (text === reversedText) {
      Alert.alert('Info', 'Kata atau kalimat tersebut adalah palindrom.');
    } else {
      Alert.alert('Info', 'Kata atau kalimat tersebut bukan palindrom.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Masukkan kata atau kalimat"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <Button title="Validasi" onPress={checkPalindrom} />
      {isPalindrom && <Text style={styles.resultGreen}>Palindrom!</Text>}
      {!isPalindrom && isPalindrom !== false && (
        <Text style={styles.resultRed}>Bukan Palindrom!</Text>
      )}
      <Image
        source={{
          uri: 'https://cdn0-production-images-kly.akamaized.net/XusbAr4kV2fj52u-I4XJxl1tr3s=/800x450/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1206834/original/005834800_1460969318-Pikachu.jpg',
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: 200,
    backgroundColor: '#fff',
  },
  resultGreen: {
    marginTop: 10,
    color: 'green',
  },
  resultRed: {
    marginTop: 10,
    color: 'red',
  },
  image: {
    marginTop: 20,
    width: 200,
    height: 200,
  },
});
