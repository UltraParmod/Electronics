import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({btnText, onpress}) => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      activeOpacity={0.5}
      onPress={() => onpress()}>
      <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  btnContainer: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#fff',
    // backgroundColor: '#fff'
    borderRadius: 10,
  },
  btnText: {
    color: '#000',
  },
});
