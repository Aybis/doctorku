import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ICVector1, ICVector2, ILChat } from '../../assets';
import { Card, Gap, Header, Rating } from '../../components';
import { colors, fonts } from '../../utils';

const ProfileDoctor = ({ navigation, route }) => {
  const dataDoctor = route.params;

  return (
    <View style={styles.page}>
      <ICVector1 style={styles.vector1} />
      <ICVector2 style={styles.vector2} />
      {/* Start Header Component */}
      <Header onPress={() => navigation.goBack()} />
      {/* End Header Component */}

      <View style={styles.borderAvatar}>
        <Image
          source={{
            uri: dataDoctor.data.photo,
          }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.me}>
            <Text style={styles.name}>Dr. {dataDoctor.data.fullName}</Text>
            <Gap height={5} />
            <Text style={styles.spesialis}>
              Spesialis {dataDoctor.data.category}
            </Text>
            <Gap height={5} />

            <Rating rating={5} height={14} width={14} />
            <Gap height={10} />
          </View>
          <View style={styles.aboutMe}>
            <Text style={styles.title}>ABOUT ME</Text>
            <Text style={styles.desc}>
              Dr. {dataDoctor.data.fullName} is {dataDoctor.data.about} a good
              doctor is a pediatrician who practices at Siloam International.
              She as a Specialist in Obstetricians and Pediatrician at the
              Faculty of Medicine, Universitas Gadjah Mada.
            </Text>
            <Text style={styles.title}>SPECIALIZATION</Text>
            <View style={styles.card}>
              <Card title={dataDoctor.data.category} type="spesialis" />
            </View>
            <Text style={styles.title}>PRACTICE</Text>
            <View style={styles.card}>
              <Card title={dataDoctor.data.hospital} type="rs" />
            </View>
          </View>
          <Gap height={50} />
        </ScrollView>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Chat', dataDoctor)}>
            <Image style={styles.icon} source={ILChat} />
            {/* <ICSend style={styles.icon} /> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileDoctor;

const windowWith = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
  },
  borderAvatar: {
    width: windowWith * 0.7,
    height: windowHeight * 0.4,
  },
  vector1: {
    position: 'absolute',
    left: windowWith * 0.05,
    top: windowHeight * 0.03,
  },
  vector2: {
    position: 'absolute',
    top: windowHeight * 0.2,
  },
  avatar: {
    marginTop: -15,
    borderRadius: 20,
    width: windowWith * 0.7,
    height: windowHeight * 0.4,
  },
  content: {
    flex: 1,
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.secondary,
  },
  me: {
    alignItems: 'center',
  },
  name: {
    color: colors.white,
    fontFamily: fonts.primary[800],
    fontSize: 18,
    textAlign: 'center',
  },
  spesialis: {
    textTransform: 'capitalize',
    fontSize: 14,
    fontFamily: fonts.primary[700],
    color: colors.text.secondary,
  },
  aboutMe: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 12,
    fontFamily: fonts.primary[700],
    color: colors.white,
    marginBottom: 10,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    color: colors.text.secondary,
    marginBottom: 10,
  },
  card: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  button: {
    backgroundColor: colors.tertiary,
    borderRadius: 60 / 2,
    height: 60,
    width: 60,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    left: windowWith * 0.75,
    bottom: windowHeight * 0.03,
  },
  icon: {
    height: 30,
    width: 30,
  },
});
