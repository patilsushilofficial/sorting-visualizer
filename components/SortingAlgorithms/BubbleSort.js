import React, { useState,useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SortingVisualizer from './SortingVisualizer';
import { defaultArray } from '../common/constants';

const BubbleSort = () => {
  const [array, setArray] = useState(defaultArray);
  const [sorting, setSorting] = useState(false);
  const resetArray = () => {
    setArray(defaultArray);
    setSorting(false);
  };
  const bubbleSort = useCallback(async () => {
    setSorting(true);
    const arr = [...array];
    let swapped;
    for (let i = 0; i < arr.length - 1; i++) {
      swapped = false;
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 500));
          swapped = true;
        }
      }
      if (!swapped) break;
    }
    setSorting(false);
  }, [array]);

  return (
    <View style={{ margin: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Bubble Sort</Text>
      <Text>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.</Text>

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
            alignItems: 'center',
          }}
          onPress={bubbleSort}
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

export default BubbleSort;
