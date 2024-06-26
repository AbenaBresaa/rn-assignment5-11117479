import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Master from '../assets/MASTERR.png';

const MasterCard = () => {

  return (
    <Card containerStyle={styles.card}>
      <View style={styles.cardContent}>
        <Text style={styles.cardNumber}>4562 1122 4595 7852</Text>
        <Text style={styles.cardHolder}>AR Jonson</Text>

        <View style={styles.bottomRow}>
          <View style={styles.detailGroup}>
            <Text style={styles.cardDetails}>Expiry Date</Text>
            <Text style={styles.cardDetails}>24/2000</Text>
          </View>
          <View style={styles.detailGroup}>
            <Text style={styles.cardDetails}>CVV</Text>
            <Text style={styles.cardDetails}>6986</Text>
          </View>
          <Image
            source={Master}
            style={styles.cardLogo}
          />
          
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#0A1172',
    
  },
  cardContent: {
    padding: 10,
  },
  cardNumber: {
    fontSize: 30,
    color: '#fff',
    marginBottom: 10,
    paddingTop:30,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  cardHolder: {
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  detailGroup: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cardDetails: {
    color: '#fff',
    marginTop: 5,
  },
  cardLogo: {
    width: 80,
    height: 60,
  },
});

export default MasterCard;
