import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ChatItem, HeaderChat, InputChat } from '../../components';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from '../../utils';
import { Firebase } from '../../config';

const Chat = ({ navigation, route }) => {
  const dataPasien = route.params;
  const [chat, setchat] = useState('');
  const [User, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  // get data login from local storage
  useEffect(() => {
    getDataUserFromLocal();
    const chatId = `${dataPasien.data.uid}_${User.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/`;

    Firebase.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];

          // convert data with group date to array
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];

            // data chat object convert to array
            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });

            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [dataPasien.data.uid, User.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const chatSend = () => {
    const today = new Date();
    const dataChat = {
      sendBy: User.uid,
      chatDate: new Date().getTime(),
      chatTime: getChatTime(today),
      chat: chat,
    };

    const chatId = `${dataPasien.id}_${User.uid}`;
    const urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}`;
    const urlMessageDoctor = `messages/${User.uid}/${chatId}`;
    const urlMessagePasien = `messages/${dataPasien.data.uid}/${chatId}`;

    const dataHistoryChatForDoctor = {
      lastContentChat: chat,
      lastChatDate: today.getTime(),
      uidPartner: dataPasien.data.uid,
    };

    const dataHistoryChatForPasien = {
      lastContentChat: chat,
      lastChatDate: today.getTime(),
      uidPartner: User.uid,
    };

    // send chat to firebase
    Firebase.database()
      .ref(urlFirebase)
      .push(dataChat)
      .then(() => {
        setchat('');
        // set History for pasien
        Firebase.database().ref(urlMessagePasien).set(dataHistoryChatForPasien);
        // set history for doctor
        Firebase.database().ref(urlMessageDoctor).set(dataHistoryChatForDoctor);
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      {/* Start Header Component */}
      <HeaderChat
        title={dataPasien.data.fullName}
        category={dataPasien.data.category}
        source={{ uri: dataPasien.data.photo }}
        status="online"
        onPress={() => navigation.goBack()}
      />
      {/* End Header Component */}

      {/* Start Content Component */}
      <View style={styles.content}>
        <View style={styles.wrap}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            ref={(scroll) => {
              this.scroll = scroll;
            }}
            onContentSizeChange={() => this.scroll.scrollToEnd()}>
            {chatData.map((chatContent) => {
              return (
                <View key={chatContent.id}>
                  <Text style={styles.dateNow}>{chatContent.id}</Text>
                  {chatContent.data.map((itemChat) => {
                    const isMe = itemChat.data.sendBy === User.uid;
                    return (
                      <ChatItem
                        key={itemChat.id}
                        isMe={isMe}
                        text={itemChat.data.chat}
                        date={itemChat.data.chatTime}
                        avatar={isMe ? null : { uri: dataPasien.data.photo }}
                      />
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
        <InputChat
          doctor={dataPasien.data.fullName}
          value={chat}
          onChangeText={(value) => setchat(value)}
          onPressSend={chatSend}
        />
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
