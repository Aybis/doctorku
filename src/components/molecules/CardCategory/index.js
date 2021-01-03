import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  DUDokterAnak,
  DUDokterBedah,
  DUDokterKandungan,
  DUDokterUmum,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardCategory = ({category, onPress}) => {
  const Icon = () => {
    if (category === 'Umum') {
      return <Image style={styles.avatar} source={DUDokterUmum} />;
    }
    if (category === 'Anak') {
      return <Image style={styles.avatar} source={DUDokterAnak} />;
    }
    if (category === 'Bedah') {
      return <Image style={styles.avatar} source={DUDokterBedah} />;
    }
    if (category === 'Jantung') {
      return <Image style={styles.avatar} source={DUDokterBedah} />;
    }
    if (category === 'Kandungan') {
      return <Image style={styles.avatar} source={DUDokterKandungan} />;
    }
    if (category === 'Penyakit Dalam') {
      return <Image style={styles.avatar} source={DUDokterBedah} />;
    }
    return <Image style={styles.avatar} source={DUDokterUmum} />;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon />
      <Text style={styles.textSecondary}>Saya butuh</Text>
      <Text style={styles.textPrimary}>Dokter {category}</Text>
    </TouchableOpacity>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 16,
    marginHorizontal: 10,
    marginBottom: 10,
    width: 130,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
    alignItems: 'center',
  },
  avatar: {
    height: 46,
    width: 46,
    marginBottom: 28,
  },
  textSecondary: {
    fontSize: 14,
    color: colors.text.inactive,
    fontFamily: fonts.primary[300],
    textAlign: 'center',
  },
  textPrimary: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    marginTop: 2,
    marginBottom: 10,
    textAlign: 'center',
  },
});
