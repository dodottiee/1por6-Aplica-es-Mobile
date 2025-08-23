import * as eva from '@eva-design/eva';

/**
 * Tema customizado para o UI Kitten.
 * Mantém o tema 'light' como base e sobrescreve as cores
 * primária e de sucesso para combinar com o design do app.
 */
export const myTheme = {
  ...eva.light,
  colors: {
    ...eva.light.colors,
    primary: '#3A3A55', // Usado no header e na navegação
    success: '#F7B05E', // Usado no banner promocional
  },
};
