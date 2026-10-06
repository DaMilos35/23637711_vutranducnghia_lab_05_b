import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { bikes, categories } from './data';

export default function ProductListScreen({ navigation }) {
  const [selected, setSelected] = useState('All');

  const filtered = selected === 'All' ? bikes : bikes.filter(b => b.type === selected);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world's Best Bike</Text>

      <View style={styles.catRow}>
        {categories.map(cat => (
          <TouchableOpacity
            key={cat}
            style={[styles.catBtn, selected === cat && styles.catActive]}
            onPress={() => setSelected(cat)}
          >
            <Text style={selected === cat ? styles.catTextActive : styles.catText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('ProductDetail', { bike: item })}
          >
            <Image source={item.image} style={styles.cardImg} resizeMode="contain" />
            <Text style={styles.cardName}>{item.name}</Text>
            <Text style={styles.cardPrice}>${item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E94141',
    marginBottom: 15,
  },
  catRow: {
    flexDirection: 'row',
    justify: 'space-between',
    marginBottom: 15,
  },
  catBtn: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  catActive: {
    borderColor: '#E94141',
  },
  catText: {
    color: '#888',
  },
  catTextActive: {
    color: '#E94141',
    fontWeight: 'bold',
  },
  row: {
    justify: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#F7F5F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardImg: {
    width: 90,
    height: 90,
  },
  cardName: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardPrice: {
    color: '#333',
  },
});