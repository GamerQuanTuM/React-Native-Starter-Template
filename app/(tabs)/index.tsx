import React from "react";
import {
  TextInput,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Infer the type from the schema
type FormData = z.infer<typeof formSchema>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginVertical: 12,
    paddingHorizontal: 15,
    width: "100%",
    backgroundColor: "#fff",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
    alignSelf: "flex-start",
  },
  button: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#007bff",
    borderRadius: 8,
    paddingVertical: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default function TabIndex() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema), // Integrate Zod validation
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Name Field */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your name"
          />
        )}
        name="name"
      />
      {errors.name && (
        <Text style={styles.errorText}>{errors.name.message}</Text>
      )}

      {/* Email Field */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        )}
        name="email"
      />
      {errors.email && (
        <Text style={styles.errorText}>{errors.email.message}</Text>
      )}

      {/* Password Field */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your password"
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password.message}</Text>
      )}

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}