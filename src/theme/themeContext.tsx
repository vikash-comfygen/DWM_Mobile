import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LightTheme, DarkTheme, CustomTheme } from './themeSetup';

type Theme = typeof LightTheme;
type ThemeType = 'light' | 'dark' | 'custom';

interface ThemeContextType {
  currentTheme: ThemeType;
  theme: Theme;
  setTheme: (type: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  // Load theme preference from storage or fallback to system
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('appTheme');
      if (
        savedTheme === 'dark' ||
        savedTheme === 'light' ||
        savedTheme === 'custom'
      ) {
        setCurrentTheme(savedTheme as ThemeType);
      } else {
        const systemTheme = Appearance.getColorScheme();
        setCurrentTheme(systemTheme === 'dark' ? 'dark' : 'light');
      }
    };
    loadTheme();
  }, []);

  // Optional: auto-respond to system changes if no preference saved
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      AsyncStorage.getItem('appTheme').then(saved => {
        if (!saved) {
          setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
        }
      });
    });
    return () => subscription.remove();
  }, []);

  const setTheme = async (type: ThemeType) => {
    setCurrentTheme(type);
    await AsyncStorage.setItem('appTheme', type);
  };

  const theme =
    currentTheme === 'dark'
      ? DarkTheme
      : currentTheme === 'custom'
      ? CustomTheme
      : LightTheme;

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};
