import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';

const categoriesData = [
  { name: 'Ração', image: 'https://placehold.co/100x100/FFDDC1/333?text=Ração' },
  { name: 'Brinquedos', image: 'https://placehold.co/100x100/A2E4B8/333?text=Brinquedos' },
  { name: 'Acessórios', image: 'https://placehold.co/100x100/C1D4FF/333?text=Acessórios' },
  { name: 'Higiene', image: 'https://placehold.co/100x100/FFC1F5/333?text=Higiene' },
];

export const Categories = () => {
  return (
    <Layout style={styles.section}>
      <Text category='h6' style={styles.sectionTitle}>Categorias</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoriesData.map((category, index) => (
          <Card key={index} style={styles.categoryCard}>
            <Image source={{ uri: category.image }} style={styles.categoryImage} />
            <Text category='c1' style={styles.categoryText}>{category.name}</Text>
          </Card>
        ))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  section: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    marginBottom: 12,
    fontWeight: 'bold',
  },
  categoryCard: {
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  categoryText: {
    textAlign: 'center',
  },
});
