import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  idText: {
    fontSize: 18,
    color: '#6b7280'
  }
});

export default function IdPage() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ID Page</Text>
      <Text style={styles.idText}>ID: {id}</Text>
    </View>
  );
}
