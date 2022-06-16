import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import fonts from '../constants/fonts';
import colors from '../constants/colors';
import Card from './Card';
const SmallCard = ({title}) => {
  return (
    <View style={styles.featureCard}>
      <Image
        style={styles.featureImage}
        source={require('../assets/images/rocket.png')}
      />
      <Text style={styles.featureText} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};



const DeliveryComponent = () => {
  const [selected, setSelected] = useState();

  const buttonClicked = x => {
    setSelected(x);
    console.log(selected);
  };

  return (
    <View>
      <ScrollView style={styles.scroll} horizontal={true}>
        <Image
          style={styles.bannerCard}
          source={require('../assets/images/ZomatoCard.jpg')}
        />
        <Image
          style={styles.bannerCard}
          source={require('../assets/images/ZomatoCard.jpg')}
        />
        <Image
          style={styles.bannerCard}
          source={require('../assets/images/ZomatoCard.jpg')}
        />
      </ScrollView>
      <View style={styles.features}>
        <SmallCard title={'Express Delivery'} />
        <SmallCard title={'safely sealed'} />
        <SmallCard title={'Great Offers'} />
        <SmallCard title={'New arivals'} />
        <SmallCard title={'Trending Places'} />
      </View>
      <View style={styles.filerView}>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            style={styles.filerImage}
            source={require('../assets/images/filter.png')}
          />
          <Text style={styles.filterText}>filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Rating</Text>
          <Image
            style={styles.arroeImage}
            source={require('../assets/images/downArrow.png')}
          />
        </TouchableOpacity>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.filterButton,
              {
                backgroundColor:
                  selected === 'Indian' ? colors.primary : colors.white,
              },
            ]}
            onPress={() => buttonClicked('Indian')}>
            <Text style={styles.filterText}>Indian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              {
                backgroundColor:
                  selected === 'Chinese' ? colors.primary : colors.white,
              },
            ]}
            onPress={() => buttonClicked('Chinese')}>
            <Text style={styles.filterText}>Chinese</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.filterButton,
              {
                backgroundColor:
                  selected === 'Italian' ? colors.primary : colors.white,
              },
            ]}
            onPress={() => buttonClicked('Italian')}>
            <Text style={styles.filterText}>Italian</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.filterButton,
              {
                backgroundColor:
                  selected === 'Mexican' ? colors.primary : colors.white,
              },
            ]}
            onPress={() => buttonClicked('Mexican')}>
            <Text style={styles.filterText}>Mexican</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <Card />
      <Card />
      <Card />
    </View>
  );
};

export default DeliveryComponent;

const styles = StyleSheet.create({
  bannerCard: {
    height: 160,
    width: 250,
    borderRadius: 12,
    marginHorizontal: 5,
  },
  scroll: {
    margin: 10,
    marginHorizontal: 16,
  },
  features: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 16,
    justifyContent: 'space-between',
  },
  featureCard: {
    width: 60,
    height: 75,
    borderWidth: 0.5,
    borderColor: colors.black,
    justifyContent: 'center',
    borderRadius: 10,
  },
  featureImage: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  featureText: {
    fontFamily: fonts.bold,
    fontSize: 13,
    color: colors.black,
    alignSelf: 'center',
    textAlign: 'center',
  },
  filerView: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 16,
  },
  filterButton: {
    flexDirection: 'row',
    borderColor: colors.grey,
    borderWidth: 1,
    padding: 3,
    borderRadius: 5,
    marginRight: 10,
    width: 70,
    justifyContent: 'center',
  },
  filerImage: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  filterText: {
    fontFamily: fonts.bold,
    color: colors.black,
  },
  arroeImage: {
    height: 10,
    width: 10,
    alignSelf: 'center',
    marginHorizontal: 2,
    tintColor: colors.grey,
  },
});
