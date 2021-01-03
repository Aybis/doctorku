import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DUProfileDoctor, ICSend} from '../../../assets';
import {colors, fonts} from '../../../utils';

const CardDoctor = ({onPressMessage}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => alert('Go to Profile ')}>
      <View style={styles.wrapAvatar}>
        <Image style={styles.avatar} source={DUProfileDoctor} />
      </View>

      <View style={styles.wrapText}>
        <View>
          <Text style={styles.name}>Dr Agus Halim </Text>
          <Text style={styles.spesialis}>Dokter Spesialis Anak </Text>
          <Text style={styles.hospital}>RS Sadikin Bandung </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.buttonMessage} onPress={onPressMessage}>
            <ICSend />
            <Text style={styles.textButton}> Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardDoctor;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.white,
    margin: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  wrapAvatar: {
    padding: 7,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  wrapText: {
    alignItems: 'center',
    alignContent: 'center',
    // marginVertical: 7,
    marginLeft: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[700],
    textAlign: 'left',
  },
  spesialis: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
  },
  hospital: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
  },
  buttonMessage: {
    marginHorizontal: 15,
    backgroundColor: colors.primary,
    width: 78,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
  textButton: {
    color: colors.white,
    textAlign: 'center',
  },
});
