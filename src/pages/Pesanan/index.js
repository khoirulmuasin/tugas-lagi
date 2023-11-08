import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const PulsaPurchase = () => {
  const [nominal, setNominal] = useState('');
  
  const handlePurchase = () => {
    console.log(Membeli pulsa dengan nominal: ${nominal});
  };

  return (
    <View>
      <Text>Masukkan nominal pulsa:</Text>
      <TextInput
        placeholder="Nominal pulsa"
        onChangeText={(text) => setNominal(text)}
        value={nominal}
      />
      <Button title="Beli Pulsa" onPress={handlePurchase} />
    </View>
  );
};

export default PulsaPurchase;