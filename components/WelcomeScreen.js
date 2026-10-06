import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        A premium online store for sporter and their stylish choice
      </Text>

      <View style={styles.imgBox}>
        <Image
          source={ require('../img/bifour_-removebg-preview.png') }
          style={styles.img}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>POWER BIKE SHOP</Text>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProductList')}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justify: 'space-around',
    backgroundColor: '#fff',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
  },
  imgBox: {
    width: '100%',
    height: 250,
    backgroundColor: '#F7D6D6',
    borderRadius: 20,
    alignItems: 'center',
    justify: 'center',
  },
  img: {
    width: '80%',
    height: '80%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#E94141',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 20,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});