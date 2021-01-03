import React, {Component} from 'react';
import {Text, View, Dimensions, StyleSheet, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json
import {DUAvatar} from '../../assets';
import {Rating} from '../../components/atoms';

import {scrollInterpolator, animatedStyles, colors, fonts} from '../../utils';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 3);

const DATA = [];
for (let i = 0; i < 10; i++) {
  DATA.push(i);
}

export default class Hospitals extends Component {
  state = {
    index: 0,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({item}) {
    return (
      <View style={styles.itemContainer}>
        {/* <Text style={styles.itemLabel}>{`Item ${item}`}</Text> */}
        <Image style={styles.image} source={DUAvatar} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.header}>Hospitals</Text>
        <View style={styles.carouselWrapper}>
          <Carousel
            ref={(c) => (this.carousel = c)}
            data={DATA}
            renderItem={this._renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            containerCustomStyle={styles.carouselContainer}
            inactiveSlideShift={0}
            onSnapToItem={(index) => this.setState({index})}
            scrollInterpolator={scrollInterpolator}
            slideInterpolatedStyle={animatedStyles}
            useScrollView={true}
          />
          {/* <Text style={styles.counter}>{this.state.index}</Text> */}
        </View>
        <View style={styles.textContent}>
          <View style={styles.wrapperHospitals}>
            <Text style={styles.name}>Siloam Hospital Internasional </Text>
            <Text style={styles.address}>
              Jl. Siloam No.6, Bencongan, Kelapa Dua, Tangerang, Banten 15811
            </Text>
            <Rating rating={5} height={18} width={18} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 30,
  },
  header: {
    fontSize: 30,
    paddingLeft: 24,
    fontFamily: fonts.primary[700],
  },
  carouselWrapper: {
    marginHorizontal: -24,
  },
  carouselContainer: {
    marginTop: 20,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'dodgerblue',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    // marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
  textContent: {
    backgroundColor: colors.secondary,
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  wrapperHospitals: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    color: colors.white,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[700],
    color: colors.white,
  },
  address: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.secondary,
    marginVertical: 5,
  },
});
