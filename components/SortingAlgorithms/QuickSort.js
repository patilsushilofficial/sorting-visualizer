import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import SortingVisualizer from './SortingVisualizer';

const QuickSort = () => {
  const [array, setArray] = useState([30, 10, 50, 20, 60, 40]);
  const [sorting, setSorting] = useState(false);

  const quickSort = async (arr, left = 0, right = arr.length - 1) => {
    if (left < right) {
      const pivotIndex = await partition(arr, left, right);
      await quickSort(arr, left, pivotIndex - 1);
      await quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
  };

  const partition = async (arr, left, right) => {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return i + 1;
  };

  const handleSort = async () => {
    setSorting(true);
    const sortedArray = await quickSort([...array]);
    setArray(sortedArray);
    setSorting(false);
  };

  return (
    <View style={{ marginVertical: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Quick Sort</Text>
      <Text>Quick Sort is an efficient, in-place, comparison-based, divide and conquer sorting algorithm. It is one of the most commonly used sorting algorithms due to its average case performance.</Text>
      <SortingVisualizer array={array} />
      <Button title="Sort" onPress={handleSort} disabled={sorting} />
    </View>
  );
};

export default QuickSort;
