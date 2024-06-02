// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const products = [
  { id: '1', name: 'Product 1', price: 100 },
  { id: '2', name: 'Product 2', price: 200 },
  // Add more products as needed
];

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button
              title="View Details"
              onPress={() => navigation.navigate('ProductDetails', { product: item })}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
