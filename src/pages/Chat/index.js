import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {DUProfileDoctor1} from '../../assets';
import {ChatItem, HeaderChat, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chat = ({navigation, route}) => {
  const {name, status, image} = route.params;
  const [photo, setphoto] = useState(image);

  const setImage = () => {
    setphoto({uri: image});
  };

  return (
    <View style={styles.page}>
      {/* Start Header Component */}
      <HeaderChat
        title={name}
        source={photo}
        status={status}
        onError={() => setImage()}
        onPress={() => navigation.goBack()}
      />
      {/* End Header Component */}

      {/* Start Content Component */}
      <View style={styles.content}>
        <View style={styles.wrap}>
          <KeyboardAwareScrollView>
            <Text style={styles.dateNow}>Senin, 4 Januari 2021</Text>
            <ChatItem isMe />
            <ChatItem avatar={image} />
            <ChatItem isMe />
            <ChatItem avatar={image} />
            <ChatItem isMe />
          </KeyboardAwareScrollView>
        </View>
        <InputChat />
      </View>
      {/* End Content Component */}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  content: {
    padding: 10,
    marginTop: -10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    backgroundColor: colors.white,
  },
  wrap: {
    flex: 1,
  },
  dateNow: {
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 10,
    fontFamily: fonts.primary[300],
  },
});
