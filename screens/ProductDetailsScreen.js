// screens/ProductDetailsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart', { product })} />
    </View>
  );
};

export default ProductDetailsScreen;


