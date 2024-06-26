import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import MasterCard from './components/MasterCard';
import IconButton  from './components/IconButton';

const Home = () => {
  const { colors } = useTheme();

  const Man = require('./assets/man.jpg');
  const buttons = [
    { id: '1', icon: require('./assets/sentIcon.png'), label: 'Sent' },
    { id: '2', icon: require('./assets/receiveIcon.png'), label: 'Receive' },
    { id: '3', icon: require('./assets/topUpIcon.png'), label: 'Topup' },
    { id: '4', icon: require('./assets/paymentIcon.png'), label: 'Payment' }
  ];
  

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
    <View style={styles.header}>
      <Image style={styles.pictures} source={Man} />
      <View style={styles.textContainer}>
        <Text style={[styles.texts, { color: colors.text }]}>Welcome back,</Text>
        <Text style={[styles.text, { color: colors.text }]}>Eric Atsu</Text>
      </View>
      <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
    </View>
    <MasterCard/>
    <View style={styles.buttonRow}>
        {buttons.map(button => (
          <IconButton
            key={button.id}
            buttonIcon={button.icon}
            buttonText={button.label}
          />
        ))}
      </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop:25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textContainer:{
    flex: 1,
    marginLeft: 10,
  },
  texts:{
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
  searchIcon: {
  marginLeft: 10,
  
  borderRadius: 50,
  },
  pictures: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default Home;
