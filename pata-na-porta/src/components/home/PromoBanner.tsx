import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Button } from '@ui-kitten/components';

export const PromoBanner = () => {
  return (
    <Card style={styles.promoBanner}>
      <Text category='h4' status='control'>PROMOÇÃO</Text>
      <Text category='h1' status='control' style={styles.promoText}>50% OFF</Text>
      <Button size='small' appearance='outline' status='control'>
        Encontre aqui!
      </Button>
    </Card>
  );
};

const styles = StyleSheet.create({
  promoBanner: {
    margin: 16,
    borderRadius: 12,
    backgroundColor: '#F7B05E',
  },
  promoText: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
});
