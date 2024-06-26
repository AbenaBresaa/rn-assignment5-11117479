import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const IconButton = ({ buttonIcon, buttonText }) => {
  return (
    <TouchableOpacity style={styles.iconButton}>
      <Image source={buttonIcon} style={styles.iconImage} />
      <Text style={styles.iconText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    alignItems: 'center',
    marginHorizontal: 10,
    
  },
  iconImage: {
    width: 35,
    height: 35,
    marginBottom: 5,
    backgroundColor: '#151E3D',
  },
  iconText: {
    color: '#000', 
    fontSize: 12,
  },
});

export default IconButton;
