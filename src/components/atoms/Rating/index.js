import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ICRate} from '../../../assets';

const Rating = ({rating}) => {
  var rate = [];
  const Rate = () => {
    for (let index = 0; index < rating; index++) {
      rate.push(<ICRate key={index} />);
    }
    return rate;
  };

  return (
    <View style={styles.rating}>
      <Rate />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
  },
});
