import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Layout } from '@ui-kitten/components';

// Importando os nossos componentes
import { Header } from '../../components/common/Header';
import { PromoBanner } from '../../components/home/PromoBanner';
import { Categories } from '../../components/home/Categories';
import { BottomNav } from '../../components/common/BottomNav';

export const HomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    // Adicionamos uma borda vermelha para ver se o SafeAreaView está a renderizar
    <SafeAreaView style={styles.safeArea}>
      {/* Adicionamos uma borda azul para ver se o Layout principal está a renderizar */}
      <Layout style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Header />
          <PromoBanner />
          <Categories />
        </ScrollView>
        <BottomNav 
          selectedIndex={selectedIndex} 
          onSelect={setSelectedIndex} 
        />
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    borderWidth: 4, // Borda de depuração
    borderColor: 'red', // Borda de depuração
  },
  container: {
    flex: 1,
    borderWidth: 4, // Borda de depuração
    borderColor: 'blue', // Borda de depuração
  },
  scrollContainer: {
    paddingBottom: 80,
  },
});
