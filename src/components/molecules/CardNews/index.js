import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts } from '../../../utils';

const CardNews = ({ title, date, publish, image, desc }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text style={styles.published}>{desc}</Text> */}
        <Text style={styles.published}>
          {publish} - {date}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardNews;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    borderRadius: 10,
    height: 80,
    width: 80,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[700],
    textAlign: 'left',
    fontSize: 14,
  },
  published: {
    marginVertical: 5,
    fontSize: 12,
    fontFamily: fonts.primary[300],
  },
  text: {
    textAlign: 'left',
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    fontSize: 12,
  },
});
