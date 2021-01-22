import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ICVideo } from '../../../assets';
import { colors, fonts } from '../../../utils';
import { Button, Gap } from '../../atoms';
const HeaderChat = ({
  onPress,
  title,
  source,
  status,
  category = 'Pasien',
}) => {
  if (category !== 'Pasien') {
    category = `Dokter ${category}`;
  }

  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-white" onPress={onPress} />
      <Image source={source} style={styles.avatar} />
      <View style={styles.wrapText}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.dokter}>{category}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <TouchableOpacity>
        <Image source={ICVideo} style={styles.iconVideo} />
      </TouchableOpacity>
      <Gap width={24} />
    </View>
  );
};

export default HeaderChat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginLeft: 20,
    height: 50,
    width: 50,
    borderRadius: 8,
  },
  wrapText: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.primary[800],
  },
  dokter: {
    textTransform: 'capitalize',
    color: colors.text.secondary,
    fontSize: 14,
    fontFamily: fonts.primary[600],
  },
  status: {
    color: colors.white,
    fontSize: 14,
    fontFamily: fonts.primary[300],
  },
  iconVideo: {
    height: 35,
    width: 35,
  },
});
