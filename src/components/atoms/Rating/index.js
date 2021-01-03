import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ICRate, ILStar} from '../../../assets';

const Rating = ({rating, height, width}) => {
  var rate = [];
  const Rate = () => {
    for (let index = 0; index < rating; index++) {
      rate.push(
        <Image
          style={styles.star(height, width)}
          source={ILStar}
          key={index}
        />,
      );
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
  star: (height, width) => ({
    height: height == null ? 14 : height,
    width: width == null ? 14 : width,
  }),
});
