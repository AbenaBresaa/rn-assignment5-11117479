import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

const transactions = [
  { id: '1', icon: require('../assets/Apple.png'), label: 'Apple Store', category: 'Entertainment', amount: '- $5.99' },
  { id: '2', icon: require('../assets/spot.png'), label: 'Spotify', category: 'Music', amount: '- $12.99' },
  { id: '3', icon: require('../assets/transfer.webp'), label: 'Money Transfer', category: 'Transaction', amount: '+ $300' },
  { id: '4', icon: require('../assets/grocery.png'), label: 'Grocery', category: '', amount: '- $88' },
];

const Transactions = () => {
  const { colors } = useTheme();

  return (
    <View style={styles.transactionsContainer}>
      {transactions.map(transaction => (
        <View key={transaction.id} style={styles.transactionItem}>
          <Image source={transaction.icon} style={styles.transactionIcon} />
          <View style={styles.transactionDetails}>
            <Text style={[styles.transactionLabel, { color: colors.text }]}>{transaction.label}</Text>
            {transaction.category !== '' && <Text style={[styles.transactionCategory, { color: colors.text }]}>{transaction.category}</Text>}
          </View>
          <Text style={[styles.transactionAmount, { color: colors.text }]}>{transaction.amount}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  transactionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionCategory: {
    color: 'gray',
    fontSize: 14,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Transactions;
