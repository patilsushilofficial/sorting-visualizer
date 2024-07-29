import React from 'react';
import { View, StyleSheet } from 'react-native';

const BAR_WIDTH = 25;

const SortingVisualizer = ({ array }) => {
  return (
    <View style={styles.container}>
      {array.map((value, index) => (
        <View
          key={index}
          style={{
            ...styles.bar,
            height: value * 5, // scale height for better visualization
            width: BAR_WIDTH,
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 550,
    marginVertical: 20,
  },
  bar: {
    marginHorizontal: 1,
    backgroundColor: 'teal',
  },
});

export default SortingVisualizer;
