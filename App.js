
import { SafeAreaView, ScrollView, Text, View, StyleSheet,useWindowDimensions,StatusBar } from 'react-native';
import BubbleSort from './components/SortingAlgorithms/BubbleSort';
import SelectionSort from './components/SortingAlgorithms/SelectionSort';
import InsertionSort from './components/SortingAlgorithms/InsertionSort';
import MergeSort from './components/SortingAlgorithms/MergeSort';
import QuickSort from './components/SortingAlgorithms/QuickSort';
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import { useState } from'react';


const renderScene = SceneMap({
  first: BubbleSort,
  second: SelectionSort,
  third:InsertionSort,
  fourth:MergeSort,
  fifth:QuickSort,
});

export default function App() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Bubble Sort' },
    { key: 'second', title: 'Selection Sort' },
    { key: 'third', title: 'Insertion Sort' },
    { key: 'fourth', title: 'Merge Sort' },
    { key: 'fifth', title: 'Quick Sort' },
    { key: 'fifth', title: 'Quick Sort' },
  ]);


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="teal" barStyle="light-content" />
     <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          scrollEnabled={true}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: 'teal' }}
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
        />
      )}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
