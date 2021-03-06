import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ChatItem, HeaderChat, InputChat } from '../../components';
import { Firebase } from '../../config';
import {
  colors,
  fonts,
  getChatTime,
  getData,
  setDateChat,
  showError,
} from '../../utils';

const Chat = ({ navigation, route }) => {
  const dataDoctor = route.params;
  const [chat, setchat] = useState('');
  const [User, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  // get data login from local storage
  useEffect(() => {
    getDataUserFromLocal();
    const chatId = `${User.uid}_${dataDoctor.id}`;
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
  }, [dataDoctor.id, User.uid]);

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

    const chatId = `${User.uid}_${dataDoctor.id}`;
    const urlFirebase = `chatting/${chatId}/allChat/${setDateChat(today)}`;
    const urlMessagePasien = `messages/${User.uid}/${chatId}`;
    const urlMessageDoctor = `messages/${dataDoctor.id}/${chatId}`;
    const dataHistoryChatForPasien = {
      lastContentChat: chat,
      lastChatDate: today.getTime(),
      uidPartner: dataDoctor.id,
    };
    const dataHistoryChatForDoctor = {
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

  const scrollViewRef = useRef();

  return (
    <View style={styles.page}>
      {/* Start Header Component */}
      <HeaderChat
        title={dataDoctor.data.fullName}
        category={dataDoctor.data.category}
        source={{ uri: dataDoctor.data.photo }}
        status="online"
        onPress={() => navigation.goBack()}
      />
      {/* End Header Component */}

      {/* Start Content Component */}
      <View style={styles.content}>
        <View style={styles.wrap}>
          <ScrollView
            ref={scrollViewRef}
            onContentSizeChange={() =>
              scrollViewRef.current.scrollToEnd({ animated: true })
            }>
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
                        avatar={isMe ? null : { uri: dataDoctor.data.photo }}
                      />
                    );
                  })}
                </View>
              );
            })}
          </ScrollView>
        </View>
        <InputChat
          doctor={dataDoctor.data.fullName}
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
