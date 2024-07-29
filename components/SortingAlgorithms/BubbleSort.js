import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import SortingVisualizer from './SortingVisualizer';

const BubbleSort = () => {
  const [array, setArray] = useState([30, 10, 50, 20, 60, 40,90,11,13]);
  const [sorting, setSorting] = useState(false);

  const bubbleSort = async () => {
    setSorting(true);
    const arr = [...array];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    }
    setSorting(false);
  };

  return (
    <View style={{ marginVertical: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Bubble Sort</Text>
      <Text>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</Text>
      <SortingVisualizer array={array} />
      <Button title="Sort" onPress={bubbleSort} disabled={sorting} />
    </View>
  );
};

export default BubbleSort;
