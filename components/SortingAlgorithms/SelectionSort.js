import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SortingVisualizer from './SortingVisualizer';

const SelectionSort = () => {
  const [array, setArray] = useState([30, 10, 50, 20, 60, 40, 90, 11, 13]);
  const [sorting, setSorting] = useState(false);

  const resetArray = () => {
    setArray([30, 10, 50, 20, 60, 40, 90, 11, 13]);
  };

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
    <View style={{ margin: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Selection Sort</Text>
      <Text>Selection Sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list.</Text>
      <View style={{
        borderWidth: 2,
        borderColor: '#3498db',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        alignItems: 'center'
      }}>
        <SortingVisualizer array={array} />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginTop: 20 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#4CAF50',
            padding: 15,
            borderRadius: 10,
            width: 150,
            alignItems: 'center'
          }}
          onPress={selectionSort}
          disabled={sorting}
        >
          <Text style={{ color: '#ffffff', fontSize: 16, fontWeight: 'bold' }}>Sort</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: sorting ? '#B0BEC5' : '#2196F3', // Change color when disabled
            padding: 15,
            borderRadius: 10,
            width: 150,
            alignItems: 'center',
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

export default SelectionSort;
