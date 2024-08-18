import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';

const BAR_WIDTH = 25;
const BAR_SCALE = 5;

const SortingVisualizer = ({ array }) => {
  const bars = useMemo(() => {
    return array.map((value, index) => (
      <View
        key={index}
        style={[
          styles.bar,
          {
            height: value * BAR_SCALE,
            width: BAR_WIDTH,
          },
        ]}
      />
    ));
  }, [array]);

  return <View style={styles.container}>{bars}</View>;
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

export default React.memo(SortingVisualizer);
