import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Input, Icon, Button, IconProps } from '@ui-kitten/components';

const SearchIcon = (props: IconProps) => <Icon {...props} name='search-outline' />;
const BellIcon = (props: IconProps) => <Icon {...props} name='bell-outline' />;

export const Header = () => {
  return (
    <Layout style={styles.header} level='2'>
      <Text category='h6' style={styles.logo}>Pata no Pote</Text>
      <Input
        placeholder='O que seu pet precisa hoje?'
        accessoryRight={SearchIcon}
        style={styles.searchInput}
      />
      <Button
        appearance='ghost'
        status='control'
        accessoryLeft={BellIcon}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 20,
  },
});
