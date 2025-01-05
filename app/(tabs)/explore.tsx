import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useCounterStore from "../../hooks/counterStore";
import { useRouter } from "expo-router";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  Easing,
} from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  counterText: {
    fontSize: 48,
    marginHorizontal: 20,
    color: "#007bff",
    fontWeight: "bold",
  },
  button: {
    marginVertical: 10,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#007bff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default function Explore() {
  const { count, increment, decrement } = useCounterStore();
  const router = useRouter();

  // Animation for counter text
  const counterScale = useSharedValue(1);
  const counterOpacity = useSharedValue(1);

  // Animation for "Go to ID" button
  const buttonOpacity = useSharedValue(0);

  useEffect(() => {
    // Fade in the "Go to ID" button when the screen loads
    buttonOpacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.ease,
    });
  }, []);

  // Bounce animation when counter changes
  useEffect(() => {
    counterScale.value = withSpring(1.2, { damping: 2, stiffness: 200 }, () => {
      counterScale.value = withSpring(1);
    });
  }, [count]);

  const counterAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: counterScale.value }],
      opacity: counterOpacity.value,
    };
  });

  const buttonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });

  const navigateToId = () => {
    const id = Math.random().toString(36).substring(2, 15);
    router.push(`/id/${id}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Explore</Text>

      {/* Counter Section */}
      <View style={styles.counterContainer}>
        <View style={styles.button}>
          <Button title="Decrement" onPress={decrement} color="#007bff" />
        </View>
        <Animated.Text style={[styles.counterText, counterAnimatedStyle]}>
          {count}
        </Animated.Text>
        <View style={styles.button}>
          <Button title="Increment" onPress={increment} color="#007bff" />
        </View>
      </View>

      {/* "Go to ID" Button with Fade-In Animation */}
      <Animated.View style={[styles.button, buttonAnimatedStyle]}>
        <TouchableOpacity onPress={navigateToId} style={styles.buttonContent}>
          <Text style={styles.buttonText}>Go to ID</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}