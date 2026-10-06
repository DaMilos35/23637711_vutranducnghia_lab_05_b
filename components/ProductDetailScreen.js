import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, SafeAreaView } from 'react-native';

export default function ProductDetailScreen({ route, navigation }) {
  const currentBike = route?.params?.bike || props?.bike || props?.item;

  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    } else if (props?.onBack) {
      props.onBack();
    }
  };

  const imageSource = typeof currentBike?.image === 'string' 
    ? { uri: currentBike.image } 
    : currentBike?.image;

  const currentPrice = currentBike?.price || 0;
  const originalPrice = Math.round(currentPrice / 0.85);

  return (
    <SafeAreaView style={styles.container}>
      <Pressable 
        onPress={handleBack} 
        style={styles.backBtn}
        hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
      >
        <Text style={styles.backText}>{'< Back'}</Text>
      </Pressable>

      <View style={styles.imgBox}>
        {imageSource && (
          <Image 
            source={imageSource} 
            style={styles.img} 
            resizeMode="contain" 
          />
        )}
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{currentBike?.name || 'Bike Detail'}</Text>

        <Text style={styles.price}>
          15% OFF  ${currentPrice}  <Text style={styles.oldPrice}>${originalPrice}</Text>
        </Text>

        <Text style={styles.subTitle}>Description</Text>
        <Text style={styles.desc}>
          {currentBike?.description || 
            'It is a very important form of writing as we write almost everything in paragraphs.'}
        </Text>

        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>Add to cart</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backBtn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'flex-start',
  },
  backText: {
    color: '#E94141',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imgBox: {
    height: 230,
    backgroundColor: '#F7D6D6',
    margin: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  img: {
    width: '85%',
    height: '85%',
  },
  info: {
    flex: 1,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  desc: {
    color: '#666',
    marginVertical: 10,
    lineHeight: 20,
  },
  btn: {
    backgroundColor: '#E94141',
    padding: 12,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});