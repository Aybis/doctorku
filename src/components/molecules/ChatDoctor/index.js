import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, getChatTime, setDateChat } from '../../../utils';

const ChatDoctor = ({ avatar, name, chat, time, onPress }) => {
  const getTime = new Date(time);
  const today = new Date();
  let date;

  if (setDateChat(getTime) === setDateChat(today)) {
    date = getChatTime(getTime);
  } else {
    date = setDateChat(getTime);
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={avatar} style={styles.avatar} />
      <View style={styles.wrapper}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{chat}</Text>
      </View>
      <Text style={styles.time}>{date}</Text>
    </TouchableOpacity>
  );
};

export default ChatDoctor;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    marginBottom: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 10,
  },
  name: {
    paddingTop: 5,
    fontSize: 16,
    fontFamily: fonts.primary[700],
    marginBottom: 7,
  },
  chat: {
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
  },
  time: {
    fontSize: 10,
    paddingRight: 5,
    paddingTop: 5,
    fontFamily: fonts.primary[300],
  },
});
