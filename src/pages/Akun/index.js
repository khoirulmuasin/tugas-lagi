import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AkunScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Halaman Akun</Text>
      <Text>Nama Pengguna: John Doe</Text>
      <Text>Email: johndoe@example.com</Text>
      <Button title="Keluar" onPress={handleLogout} />
    </View>
  );
};

const handleLogout = () => {
  alert('Anda telah keluar dari akun');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default AkunScreen;
