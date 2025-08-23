import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigation, BottomNavigationTab, Icon, IconProps } from '@ui-kitten/components';

// Tipagem para as propriedades do componente
interface BottomNavProps {
  selectedIndex: number;
  onSelect: (index: number) => void;
}

// Definição dos ícones com a tipagem correta
const HomeIcon = (props: IconProps) => <Icon {...props} name='home-outline' />;
const StarIcon = (props: IconProps) => <Icon {...props} name='star-outline' />;
const PersonIcon = (props: IconProps) => <Icon {...props} name='person-outline' />;
const CartIcon = (props: IconProps) => <Icon {...props} name='shopping-bag-outline' />;

// Exportação do componente
export const BottomNav = ({ selectedIndex, onSelect }: BottomNavProps) => {
  return (
    <BottomNavigation
      style={styles.bottomNavigation}
      selectedIndex={selectedIndex}
      onSelect={onSelect}
    >
      <BottomNavigationTab icon={HomeIcon} title='INÍCIO'/>
      <BottomNavigationTab icon={StarIcon} title='FAVORITOS'/>
      <BottomNavigationTab icon={PersonIcon} title='PERFIL'/>
      <BottomNavigationTab icon={CartIcon} title='CARRINHO'/>
    </BottomNavigation>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});