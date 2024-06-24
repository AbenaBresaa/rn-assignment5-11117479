import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { useTheme } from '@react-navigation/native';

const Settings = ({ toggleTheme, isDarkTheme }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container,{ backgroundColor: colors.background }]}>
      <Text style={[styles.header, {color: colors.text}]}>Settings</Text>
      <Text style={[styles.text, { color: colors.text }]}>Language</Text>
      <Text style={[styles.text, { color: colors.text }]}>My Profile</Text>
      <Text style={[styles.text, { color: colors.text }]}>Contact Us</Text>
      <Text style={[styles.text, { color: colors.text }]}>Change Password</Text>
      <Text style={[styles.text, { color: colors.text }]}>Privacy Policy</Text>
      <Text style={[styles.text, { color: colors.text }]}> Theme: {isDarkTheme ? 'Dark' : 'Light'}</Text>
      <Button title="Theme" onPress={toggleTheme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
  fontWeight: 'bold',
  justifyContent: 'center',
  fontSize: 18,
  marginBottom: 10,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});


export default Settings;

