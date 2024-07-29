import React, { useState } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import SortingVisualizer from './SortingVisualizer';

const MergeSort = () => {
  const [array, setArray] = useState([30, 10, 50, 20, 60, 40]);
  const [sorting, setSorting] = useState(false);

  const resetArray = () => {
    setArray([30, 10, 50, 20, 60, 40]);
  };

  const mergeSort = async (arr) => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return await merge(await mergeSort(left), await mergeSort(right));
  };

  const merge = async (left, right) => {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
      setArray([...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]);
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
  };

  const handleSort = async () => {
    setSorting(true);
    const sortedArray = await mergeSort([...array]);
    setArray(sortedArray);
    setSorting(false);
  };

  return (
    <View style={{ margin: 20, alignItems: 'center' }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Merge Sort</Text>
      <Text>Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the order of equal elements is the same in the input and output.</Text>
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
          onPress={handleSort}
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

export default MergeSort;
