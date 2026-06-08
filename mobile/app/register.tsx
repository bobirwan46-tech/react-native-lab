import { Link, router } from 'expo-router';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useAuth } from '@/context/AuthContext';

export default function RegisterScreen() {
  const { register, loading } = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleRegister() {
    if (!name || !email || !password) {
      Alert.alert(
        'Missing details',
        'Please enter your name, email and password.'
      );
      return;
    }

    try {
      await register(name, email, password);
      router.replace('/profile');
    } catch (error) {
      Alert.alert(
        'Registration failed',
        error instanceof Error ? error.message : 'Something went wrong.'
      );
    }
  }

  function handleGoogleLogin() {
    Alert.alert(
      'Coming Soon',
      'Google Sign-In will be implemented in a future activity.'
    );
  }

  function handleAppleLogin() {
    Alert.alert(
      'Coming Soon',
      'Apple Sign-In will be implemented in a future activity.'
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create RNLab Account V2</Text>

      <Text style={styles.subtitle}>
        Bundle Test Build
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Pressable
        style={styles.primaryButton}
        onPress={handleRegister}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#ffffff" />
        ) : (
          <Text style={styles.primaryButtonText}>Register V2</Text>
        )}
      </Pressable>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <Pressable style={styles.socialButton} onPress={handleGoogleLogin}>
        <Text style={styles.socialButtonText}>Continue with Google</Text>
      </Pressable>

      <Pressable style={styles.socialButton} onPress={handleAppleLogin}>
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </Pressable>

      <Link href="/login" style={styles.link}>
        Already have an account? Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#64748b',
    marginBottom: 32,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 14,
  },

  primaryButton: {
    backgroundColor: '#2563eb',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#e2e8f0',
  },

  dividerText: {
    marginHorizontal: 12,
    color: '#64748b',
    fontSize: 14,
  },

  socialButton: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },

  socialButtonText: {
    fontSize: 16,
    fontWeight: '500',
  },

  link: {
    marginTop: 24,
    textAlign: 'center',
    color: '#2563eb',
    fontSize: 16,
  },
});