
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import BubbleSort from './components/SortingAlgorithms/BubbleSort';
import SelectionSort from './components/SortingAlgorithms/SelectionSort';
import InsertionSort from './components/SortingAlgorithms/InsertionSort';
import MergeSort from './components/SortingAlgorithms/MergeSort';
import QuickSort from './components/SortingAlgorithms/QuickSort';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Sorting Algorithms Visualization</Text>
        <BubbleSort />
        <SelectionSort />
        <InsertionSort />
        <MergeSort />
        <QuickSort />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
