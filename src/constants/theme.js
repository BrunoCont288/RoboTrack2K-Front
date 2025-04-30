// src/constants/theme.js
import { DefaultTheme } from 'react-native-paper';

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
        accent: '#03dac4',
        background: '#f6f6f6',
        surface: '#ffffff',
        error: '#b00020',
        text: '#000000',
        disabled: '#9e9e9e',
        placeholder: '#9e9e9e',
        backdrop: '#000000',
    },
    roundness: 8,
};