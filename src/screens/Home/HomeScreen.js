import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import DeliveryComponent from '../../components/DeliveryComponent';
import SelfPickup from '../../components/SelfPickup';
const HomeScreen = () => {
  const [delivery, setDelivery] = useState(true);
  return (
    <SafeAreaView style={styles.parentContainer}>
      <ScrollView>
        <View style={styles.topView}>
          <Image
            style={styles.locationImage}
            source={require('../../assets/images/location-map.png')}
          />
          <Text style={styles.topText}>657 mars, Milky-Way</Text>
          <Image
            style={styles.profileImage}
            source={require('../../assets/images/messi.jpg')}
          />
        </View>
        <View style={styles.searchView}>
          <Image
            style={styles.searchImage}
            source={require('../../assets/images/search.png')}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search for Restaurants, cuisines..."
          />
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity
            onPress={() => setDelivery(true)}
            style={[
              styles.tabViewChildActive,
              {backgroundColor: delivery ? colors.white : colors.grey},
            ]}>
            <Text style={styles.topText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setDelivery(false)}
            style={[
              styles.tabViewChildActive,
              {backgroundColor: delivery ? colors.grey : colors.white},
            ]}>
            <Text style={styles.topText}>Self-Pickup</Text>
          </TouchableOpacity>
        </View>
        {delivery ? <DeliveryComponent /> : <SelfPickup />}
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  parentContainer: {
    backgroundColor: colors.white,
    height:"100%"
  },
  topView: {
    flexDirection: 'row',
    margin: 16,
    marginVertical: 16,
  },
  locationImage: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    alignSelf: 'center',
    marginRight: 0,
    marginLeft: '28%',
  },
  topText: {
    alignSelf: 'center',
    color: colors.black,
    fontFamily: fonts.bold,
    marginHorizontal: 10,
    fontSize: 17,
  },
  searchImage: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginLeft: 14,
  },
  searchView: {
    flexDirection: 'row',
    marginHorizontal: 16,
    margin: 10,
    height: 40,
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
  },
  searchInput: {
    marginLeft: 7,
  },
  tabView: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 16,
    height: 40,
    backgroundColor: colors.grey,
    borderRadius: 6,
  },
  tabViewChildActive: {
    margin: 3,
    width: '48%',
    justifyContent: 'center',
    borderRadius: 6,
  },
});
