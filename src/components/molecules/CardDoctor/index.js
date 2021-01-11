import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DUProfileDoctor, ICSend} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Gap, Rating} from '../../atoms';

const CardDoctor = ({
  name,
  spesialis,
  hospital,
  avatar,
  onPressMessage,
  onPressDoctor,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressDoctor}>
      <View style={styles.wrapAvatar}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatar,
          }}
        />
      </View>

      <View style={styles.wrapText}>
        <View>
          <Text style={styles.name}>Dr {name} </Text>
          {/* <Text style={styles.hospital}>{hospital} </Text> */}
          <Text style={styles.spesialis}>Spesialis {spesialis} </Text>
          <Gap height={5} />
          <Rating rating={5} height={12} width={12} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonMessage}
            onPress={onPressMessage}>
            <ICSend />
            {/* <Text style={styles.textButton}> Chat</Text> */}
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
    width: 70,
    height: 70,
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
    width: 140,
    fontSize: 14,
    fontFamily: fonts.primary[700],
    textAlign: 'left',
  },
  spesialis: {
    textAlign: 'left',
    fontSize: 11,
    fontFamily: fonts.primary[300],
  },
  hospital: {
    textAlign: 'left',
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
  },
  buttonMessage: {
    padding: 10,
    right: 10,
    backgroundColor: colors.primary,
    // width: 25,
    height: 30,
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
