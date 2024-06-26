import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import MasterCard from './components/MasterCard';
import IconButton from './components/IconButton';
import Transactions from './components/Transactions';

const Home = () => {
  const { colors } = useTheme();

  const Man = require('./assets/man.jpg');
  const buttons = [
    { id: '1', icon: require('./assets/sent.webp'), label: 'Sent' },
    { id: '2', icon: require('./assets/receive.webp'), label: 'Receive' },
    { id: '3', icon: require('./assets/loan.png'), label: 'Loan' },
    { id: '4', icon: require('./assets/top.webp'), label: 'TopUp' }
  ];
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <Image style={styles.pictures} source={Man} />
        <View style={styles.textContainer}>
          <Text style={[styles.texts, { color: colors.text }]}>Welcome back,</Text>
          <Text style={[styles.text, { color: colors.text }]}>Eric Atsu</Text>
        </View>
        <View style={[styles.searchIconContainer, { backgroundColor: colors.card }]}>
          <Icon name="search" size={20} color={colors.text} style={styles.searchIcon} />
        </View>
      </View>
      <MasterCard />
      <View style={styles.buttonRow}>
        {buttons.map(button => (
          <IconButton
            key={button.id}
            buttonIcon={button.icon}
            buttonText={button.label}
            color={colors.text} 
          />
        ))}
      </View>
      <View style={[styles.transactionContainer, { backgroundColor: colors.background }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>Transactions</Text> 
        <Text style={[styles.section, { color: colors.primary }]}>See All</Text>
      </View>
      <Transactions />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  texts: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
  searchIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
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
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  section: {
    fontSize: 16,
    alignSelf: 'center',
  }
});

export default Home;
