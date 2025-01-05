import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const DrawerContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <Link href="/(tabs)" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <Text>Home</Text>
        </TouchableOpacity>
      </Link>
      <Link href="/settings" asChild>
        <TouchableOpacity style={styles.menuItem}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  menuItem: {
    paddingVertical: 10
  }
});

export default DrawerContent;
