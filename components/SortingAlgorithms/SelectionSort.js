import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import SortingVisualizer from './SortingVisualizer';

const SelectionSort = () => {
  const [array, setArray] = useState([30, 10, 50, 20, 60, 40]);
  const [sorting, setSorting] = useState(false);

  const selectionSort = async () => {
    setSorting(true);
    const arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      let minIdx = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      if (minIdx !== i) {
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
    setSorting(false);
  };

  return (
    <View style={{ marginVertical: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Selection Sort</Text>
      <Text>Selection Sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list.</Text>
      <SortingVisualizer array={array} />
      <Button title="Sort" onPress={selectionSort} disabled={sorting} />
    </View>
  );
};

export default SelectionSort;
