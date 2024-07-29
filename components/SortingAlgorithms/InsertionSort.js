import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SortingVisualizer from './SortingVisualizer';

const InsertionSort = () => {
  const [array, setArray] = useState([30, 10, 50, 20, 60, 40]);
  const [sorting, setSorting] = useState(false);
  const resetArray = () => {
    setArray([30, 10, 50, 20, 60, 40]);
  };

  const insertionSort = async () => {
    setSorting(true);
    const arr = [...array];
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j -= 1;
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
      arr[j + 1] = key;
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
    setSorting(false);
  };

  return (
    <View style={{ margin: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Insertion Sort</Text>
      <Text>Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.</Text>
      <SortingVisualizer array={array} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#4CAF50',
            padding: 15,
            borderRadius: 10,
            width: 150,
            alignItems: 'center'
          }}
          onPress={insertionSort}
          disabled={sorting}
        >
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Sort</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#2196F3',
            padding: 15,
            borderRadius: 10,
            width: 150,
            alignItems: 'center'
          }}
          onPress={resetArray}
          disabled={sorting}
        >
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Reset</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default InsertionSort;
