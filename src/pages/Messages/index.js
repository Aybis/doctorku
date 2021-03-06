import React, { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ILChat } from '../../assets';
import { Gap, Search } from '../../components/atoms';
import { ChatDoctor } from '../../components/molecules';
import { Firebase } from '../../config';
import { colors, fonts, getData } from '../../utils';

const Messages = ({ navigation }) => {
  const [User, setUser] = useState({});
  const [historyChat, sethistoryChat] = useState([]);

  useEffect(() => {
    getDataUserFromLocal();

    // letak DB firebase
    const rootDB = Firebase.database().ref();
    const urlHistory = `messages/${User.uid}/`;
    const messagesDB = rootDB.child(urlHistory);

    if (User.type === 'doctor') {
      getDataHistoryPasien(messagesDB, rootDB);
    }

    if (User.type === 'user') {
      getDataHistoryDoctor(messagesDB, rootDB);
    }
  }, [User.type, User.uid]);

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };

  const getDataHistoryPasien = (messagesDB, rootDB) => {
    // get data history chat
    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUidPasien = `users/${oldData[key].uidPartner}`;
          const detailPartnerDoc = await rootDB
            .child(urlUidPasien)
            .once('value');
          data.push({
            id: key,
            detailPartner: detailPartnerDoc.val(),
            ...oldData[key],
          });
        });

        await Promise.all(promises);

        sethistoryChat(data);
      }
    });
  };

  const getDataHistoryDoctor = (messagesDB, rootDB) => {
    // get data history chat
    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailPartner = await rootDB.child(urlUidDoctor).once('value');
          data.push({
            id: key,
            detailPartner: detailPartner.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);
        sethistoryChat(data);
      }
    });
  };

  return (
    <View style={styles.page}>
      <Text style={styles.header}>Messages</Text>
      <Search title="Messages" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {historyChat.map((chat) => {
            const dataPartner = {
              id: chat.detailPartner.uid,
              data: chat.detailPartner,
            };
            return (
              <ChatDoctor
                key={chat.id}
                avatar={{ uri: chat.detailPartner.photo }}
                name={chat.detailPartner.fullName}
                chat={chat.lastContentChat}
                time={chat.lastChatDate}
                onPress={() =>
                  navigation.navigate(
                    `${User.type === 'doctor' ? 'ChatDoctor' : 'Chat'}`,
                    dataPartner,
                  )
                }
              />
            );
          })}
          <Gap height={20} />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('soon ......')}>
        <Image style={styles.icon} source={ILChat} />
      </TouchableOpacity>
    </View>
  );
};

export default Messages;
const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    fontFamily: fonts.primary[700],
  },
  button: {
    backgroundColor: colors.secondary,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
    marginTop: windowHeight * 0.8,
    marginLeft: windowWith * 0.8,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
