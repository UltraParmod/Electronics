import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Config from '../../../Constants/config';
import Endpoints from '../../../Constants/EndPoints';

const CategoryTab = ({categories, selectedTab, changeSelectedTab}) => {
  return (
    <View style={{marginVertical: 10}}>
      <FlatList
        data={categories}
        keyExtractor={(_, index) => index?.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => changeSelectedTab(item)}
            style={[
              styles.tab,
              {
                marginLeft: index == 0 ? 15 : 5,
                backgroundColor: selectedTab.id == item.id ? 'blue' : 'white',
              },
            ]}>
            <Text
              style={[
                styles.tabText,
                {
                  color: selectedTab.id == item.id ? 'white' : 'black',
                },
              ]}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryTab;

const styles = StyleSheet.create({
  tab: {
    borderWidth: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  tabText: {
    color: '#000',
  },
});
