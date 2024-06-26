import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Settings = ({ toggleTheme, isDarkTheme }) => {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.header, { color: colors.text }]}>Settings</Text>
      <TouchableOpacity style={styles.row}>
        <Text style={[styles.text, { color: colors.text }]}>Language</Text>
        <Icon name="chevron-forward" size={20} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Text style={[styles.text, { color: colors.text }]}>My Profile</Text>
        <Icon name="chevron-forward" size={20} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Text style={[styles.text, { color: colors.text }]}>Contact Us</Text>
        <Icon name="chevron-forward" size={20} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Text style={[styles.text, { color: colors.text }]}>Change Password</Text>
        <Icon name="chevron-forward" size={20} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.row}>
        <Text style={[styles.text, { color: colors.text }]}>Privacy Policy</Text>
        <Icon name="chevron-forward" size={20} color={colors.text} />
      </TouchableOpacity>
      <View style={[styles.row, styles.themeRow]}>
        <Text style={[styles.text, { color: colors.text }]}>Theme</Text>
        <Switch
          value={isDarkTheme}
          onValueChange={toggleTheme}
          thumbColor={isDarkTheme ? "#ffff" : "#f4f3f4"}
          trackColor={{ false: "#767577", true: "#03AC13" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:30,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 18,
  },
  themeRow: {
    marginTop: 20,
  },
});

export default Settings;
