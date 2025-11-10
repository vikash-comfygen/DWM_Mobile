import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import BackupScreenThree from '../BackupScreenThree.tsx';
import BackUpScreenTwo from '../BackUpScreenTwo';

const WalletBackupFlow = () => {
  const [screenIndex, setScreenIndex] = useState(1);

  const handleNext = () => {
    setScreenIndex(prev => prev + 1);
  };

  const renderContent = () => {
    switch (screenIndex) {
      case 1:
        return <BackUpScreenTwo />;
      case 2:
        return <BackupScreenThree />;
      case 3:
        return <Text>This is Backup Screen Three content</Text>;
      default:
        return <Text>End of screens</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Wallet-0055</Text>
      </View>

      <View style={styles.content}>{renderContent()}</View>

      <Button title="Next" onPress={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  header: {
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WalletBackupFlow;
