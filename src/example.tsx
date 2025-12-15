import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Example() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello from Mini App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});