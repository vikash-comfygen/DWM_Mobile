import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomVectorIcons from '../../../components/CustomVectorIcons';
import BottomTab from '../../../navigation/BottomTab';

const words = [
  'minor',
  'shoulder',
  'blade',
  'give',
  'always',
  'object',
  'total',
  'can',
  'sand',
  'brave',
  'prevent',
  'library',
];

export default function BackupScreenThree({ navigation }) {
  const [selectedWords, setSelectedWords] = useState(Array(12).fill(null));

  // Handle selecting a word
  const handleSelect = word => {
    const emptyIndex = selectedWords.findIndex(w => w === null);
    if (emptyIndex === -1) return; // all boxes filled
    setSelectedWords(prev => {
      const newArr = [...prev];
      newArr[emptyIndex] = word;
      return newArr;
    });
  };

  // Handle clearing a word from a box
  const handleClear = index => {
    setSelectedWords(prev => {
      const newArr = [...prev];
      newArr[index] = null;
      return newArr;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <CustomVectorIcons
            name="arrowleft"
            size={20}
            color="#fff"
            iconSet="AntDesign"
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Backup</Text>
        <View style={{ width: 20 }} />
      </View>

      <Text style={styles.subTitle}>Select the words in the correct order</Text>

      {/* Number Boxes */}
      <View style={styles.gridContainer}>
        {selectedWords.map((word, i) => (
          <View key={i} style={styles.numberBox}>
            {word ? (
              <View style={styles.selectedWordContainer}>
                <Text style={styles.numberText}>{word}</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => handleClear(i)}
                >
                  <Text style={styles.closeText}>×</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <Text style={styles.numberText}>{i + 1}</Text>
            )}
          </View>
        ))}
      </View>

      {/* Horizontal Line */}
      <View style={styles.horizontalLine} />

      {/* Words Grid */}
      <View style={styles.wordsContainer}>
        {words.map((word, i) => {
          const isSelected = selectedWords.includes(word);
          return !isSelected ? (
            <TouchableOpacity
              key={i}
              style={styles.wordButton}
              onPress={() => handleSelect(word)}
              activeOpacity={0.8}
            >
              <Text style={styles.wordText}>{word}</Text>
            </TouchableOpacity>
          ) : null;
        })}
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} activeOpacity={0.8}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
      <BottomTab />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'BricolageGrotesque-Regular',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  subTitle: {
    color: '#8E8E93',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  numberBox: {
    width: '30%',
    aspectRatio: 3 / 1,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  numberText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  selectedWordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 5,
  },
  closeButton: {
    backgroundColor: '#333',
    borderRadius: 12,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  horizontalLine: {
    height: 1,
    backgroundColor: '#2A2A2A',
    width: '100%',
    marginBottom: 20,
  },
  wordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  wordButton: {
    width: '30%',
    aspectRatio: 3 / 1,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 8,
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181818',
  },
  wordText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'BricolageGrotesque-Regular',
  },
  verifyButton: {
    backgroundColor: '#7B3DFF',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'BricolageGrotesque-Regular',
  },
});
