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
import {
  DUProfileAlbert,
  ICSend,
  ICSendActive,
  ICVector1,
  ICVector2,
  ILChat,
} from '../../assets';
import {Card, Gap, Header, Rating} from '../../components';
import {colors, fonts} from '../../utils';

const ProfileDoctor = ({navigation, route}) => {
  const {name, avatar, spesialis, type} = route.params;

  const ImageFrom = () => {
    if (type === 'uri') {
      return <Image source={avatar} style={styles.avatar} />;
    }
    return (
      <Image
        source={{
          uri: avatar,
        }}
        style={styles.avatar}
      />
    );
  };

  return (
    <View style={styles.page}>
      <ICVector1 style={styles.vector1} />
      <ICVector2 style={styles.vector2} />
      {/* Start Header Component */}
      <Header onPress={() => navigation.goBack()} />
      {/* End Header Component */}

      <View style={styles.borderAvatar}>
        <ImageFrom />
      </View>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.me}>
            <Text style={styles.name}>Dr. {name}</Text>
            <Gap height={5} />
            <Text style={styles.spesialis}>Spesialis {spesialis}</Text>
            <Gap height={5} />

            <Rating rating={5} height={14} width={14} />
            <Gap height={10} />
          </View>
          <View style={styles.aboutMe}>
            <Text style={styles.title}>ABOUT ME</Text>
            <Text style={styles.desc}>
              Dr. {name} is a good doctor is a pediatrician who practices at
              Siloam International. She as a Specialist in Obstetricians and
              Pediatrician at the Faculty of Medicine, Universitas Gadjah Mada.
            </Text>
            <Text style={styles.title}>SPECIALIZATION</Text>
            <View style={styles.card}>
              <Card title="Reproduction" />
              <Card title="Heart" />
              <Card title="Kids" />
            </View>
            <Text style={styles.title}>PRACTICE</Text>
            <View style={styles.card}>
              <Card title="Siloam Internasional" />
              <Card title="RS Sadikin" />
              <Card title="RS Dewi Sri" />
              <Card title="RS Mitra Keluarga" />
            </View>
          </View>
          <Gap height={50} />
        </ScrollView>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate('Chat', {
                name: name,
                status: 'online',
                image: avatar,
                type: type,
              })
            }>
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
