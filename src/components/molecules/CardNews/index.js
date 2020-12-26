import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {DUNews3} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardNews = ({title, date, publish}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={DUNews3} />
      <View style={styles.textWrapper}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>
            {publish} - {date}
          </Text>
        </View>
        <View style={styles.textPreview}>
          <Text style={styles.text}>
            Dolor incididunt deserunt cupidatat pariatur aute officia dolore
            cupidatat ipsum irure nostrud ....
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardNews;

const windoWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'row',
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
  },
  textWrapper: {
    marginLeft: 10,
    marginRight: 20,
    width: windoWith * 0.65,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: fonts.primary[700],
    textAlign: 'left',
    fontSize: 14,
  },
  date: {
    marginTop: 5,
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
