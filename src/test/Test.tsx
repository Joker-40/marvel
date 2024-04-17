import {FlatList, FlatListProps, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from '../theme/Colors';

const Test = () => {
  const flatListRef = useRef(null);
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
    60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
    79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97,
    98, 99, 100,
  ];


  const [selectedIndex, setSelectedIndex] = useState(1);
  console.log(selectedIndex)
  //@ts-ignore
  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.y;
    const _selectedIndex = Math.floor(contentOffsetX / 15);
    console.log(_selectedIndex, contentOffsetX)
    setSelectedIndex(_selectedIndex);
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: Colors.Black,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{height: 120}}>
        <FlatList
          data={data}
        //   viewabilityConfig={{
        //     itemVisiblePercentThreshold: 95,
        //   }}
          onViewableItemsChanged={flatListRef.current}
          onScroll={handleScroll}
          renderItem={({item}) => (
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent:'center'
              }}>
              <Text
                style={{
                    color: Colors.White,
                  opacity: item === 10 ? 1 : item === 9 || item === 11 ? 0.6 : 0.5,
                  fontSize: item === 10 ? 24 : item === 9 || item === 11 ? 20 :  16,
                  fontWeight: 'bold',
                }}>
                {item}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({});
