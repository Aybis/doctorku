import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICAccount,
  ICBack,
  ICDescription,
  ICLanguage,
  ICStar,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const List = ({title, desc, icon}) => {
  const Icon = () => {
    if (icon === 'account') {
      return <ICAccount />;
    }
    if (icon === 'language') {
      return <ICLanguage />;
    }
    if (icon === 'rate') {
      return <ICStar />;
    }
    if (icon === 'help') {
      return <ICDescription />;
    }

    return <ICAccount />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => alert('Go to Profile ')}>
      <Icon style={styles.iconMenu} />

      <View style={styles.wrapText}>
        <View>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <View style={styles.icon}>
          <ICBack />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  wrapText: {
    alignItems: 'center',
    alignContent: 'center',
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    textAlign: 'left',
  },
  desc: {
    fontFamily: fonts.primary[300],
  },
  icon: {
    marginRight: 24,
    transform: [{scaleX: -1}],
  },
});
