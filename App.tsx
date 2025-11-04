import React from 'react';
import { View } from 'react-native';
import Routes from './src/navigation/routes';
import { ThemeProvider } from './src/theme/themeContext';
// import { ThemeProvider } from '@theme/themeContext';
// import TestComponent from './TestComponent';

// import { PaperProvider } from 'react-native-paper';
// import NoInternetModal from '@utils/NoInternetModal';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      {/* // <PaperProvider> */}
      <Routes />
      {/* // </PaperProvider> */}
    </ThemeProvider>
  );
};

export default App;
