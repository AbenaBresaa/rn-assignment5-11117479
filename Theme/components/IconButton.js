import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const IconButton = ({ buttonIcon, buttonText, color }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <Image source={buttonIcon} style={[styles.buttonIcon, { tintColor: color }]} />
      <Text style={[styles.buttonText, { color: color }]}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  buttonIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 16,
  },
});

export default IconButton;
