import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// Importando o nosso tema e a nossa tela principal
import { myTheme } from './styles/theme';
import { HomeScreen } from './screens/App/HomeScreen';

/**
 * Ponto de entrada principal da aplicação.
 * Responsável por configurar os provedores globais como
 * o tema do UI Kitten e o registo de ícones.
 */
export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={myTheme}>
        <HomeScreen />
      </ApplicationProvider>
    </>
  );
}
