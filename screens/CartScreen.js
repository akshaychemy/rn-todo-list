// screens/CartScreen.js
import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState([]);
  
  const product = route.params?.product;
  if (product && !cart.some(item => item.id === product.id)) {
    setCart([...cart, product]);
  }

  const placeOrder = () => {
    // Implement COD order placement logic here
    alert('Order placed with Cash on Delivery!');
  };

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        )}
      />
      <Button title="Place Order (COD)" onPress={placeOrder} />
    </View>
  );
};

export default CartScreen;
