import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  DUProfileDoctor,
  DUProfileDoctor1,
  DUProfileDoctor2,
  ILChat,
} from '../../assets';
import {Gap, Search} from '../../components/atoms';
import {ChatDoctor} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      avatar: DUProfileDoctor,
      name: 'Albert Johnson',
      chat: 'Terimakasih atas sarannya dok ... :)',
      time: '14: 10',
    },
    {
      id: 2,
      avatar: DUProfileDoctor1,
      name: 'Frisca Putri',
      chat: 'Terimakasih atas sarannya dok ... :)',
      time: '14: 12',
    },
    {
      id: 3,
      avatar: DUProfileDoctor2,
      name: 'Frisca Putri',
      chat: 'Terimakasih atas sarannya dok ... :)',
      time: '12:32',
    },
  ]);
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Messages</Text>
      <Search title="Messages" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {doctors.map((doctor) => {
            return (
              <ChatDoctor
                key={doctor.id}
                avatar={doctor.avatar}
                name={doctor.name}
                chat={doctor.chat}
                time={doctor.time}
                onPress={() => navigation.navigate('Chat')}
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
