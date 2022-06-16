import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.cardImage}
        source={require('../assets/images/ZomatoCard.jpg')}
      />
      <View style={styles.cardData}>
        <Text style={styles.itemName}>Dosa</Text>
        <Text style={styles.itemInfo}>Indian</Text>
        <Text style={styles.itemInfo}>230rs | 34-45 mins</Text>
        <Text style={styles.itemOffer}>50% off use Code MYFOODY</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 16,
  },
  cardImage: {
    height: 120,
    width: 120,
    borderRadius: 10,
  },
  cardData: {
    flexDirection: 'column',
    marginHorizontal:16,
    margin:10
  },
  itemName: {
    fontSize:18,
    color:colors.black,
    fontFamily:fonts.black
  },itemInfo:{
    color:colors.black,
    fontSize:14,
    fontFamily:fonts.regular
  },itemOffer:{
    color:colors.primary,
    fontFamily:fonts.regular,
    fontSize:15
  }
});
