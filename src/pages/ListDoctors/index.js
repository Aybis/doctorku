import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
// import {ICFilter} from '../../assets';
import {
  DUAvatar,
  DUProfileAlbert,
  DUProfileDoctor2,
  DUProfileDoctor4,
  DUProfileDoctor5,
  DUProfileDoctor7,
  DUProfileDoctor8,
  ICFilter,
  JSONListDoctor,
} from '../../assets';
import {CardDoctor, Gap, Header, RatedDoctors} from '../../components';
import {colors, fonts} from '../../utils';

const ListDoctors = ({navigation, route}) => {
  const {category} = route.params;
  const [doctors] = useState([
    {
      id: 1,
      avatar: DUAvatar,
      name: 'Frisca Putri',
      spesialis: 'Kandungan',
      rate: 5,
    },
    {
      id: 2,
      avatar: DUProfileDoctor2,
      name: 'Ayu Putri',
      spesialis: 'Anak',
      rate: 5,
    },
    {
      id: 3,
      avatar: DUProfileDoctor4,
      name: 'Agus Halim',
      spesialis: 'THT',
      rate: 5,
    },
    {
      id: 4,
      avatar: DUProfileDoctor5,
      name: 'Valencia',
      spesialis: 'Kulit & Kelamin',
      rate: 5,
    },
    {
      id: 5,
      avatar: DUProfileAlbert,
      name: 'Johnson Astiago',
      spesialis: 'Bedah Tulang',
      rate: 5,
    },
    {
      id: 6,
      avatar: DUProfileDoctor7,
      name: 'Abdul Malik',
      spesialis: 'Anastesis',
      rate: 5,
    },
    {
      id: 7,
      avatar: DUProfileDoctor8,
      name: 'Anya Ger',
      spesialis: 'Penyakit Dalam',
      rate: 5,
    },
    {
      id: 8,
      avatar: DUProfileAlbert,
      name: 'Tanoesoedibjo',
      spesialis: 'Orthopedi',
      rate: 5,
    },
  ]);
  return (
    <View style={styles.page}>
      {/* Start Header Component */}
      <Header
        title={`Doctor ${category}`}
        onPress={() => navigation.goBack()}
      />
      {/* End Header Component */}

      {/* Start Rated Doctor Component */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ratedDoctors}>
          <Text style={styles.textRatedDoctors}>List Doctors</Text>
          <View style={styles.listRatedDoctorHorizontal} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.doctor}>
              <Gap width={16} />
              {doctors.map((doctor) => {
                return (
                  <RatedDoctors
                    key={doctor.id}
                    name={doctor.name}
                    spesialis={doctor.spesialis}
                    rate={doctor.rate}
                    avatar={doctor.avatar}
                    onPress={() =>
                      navigation.navigate('ProfileDoctor', {
                        name: doctor.name,
                        avatar: doctor.avatar,
                        spesialis: category,
                        type: 'uri',
                      })
                    }
                  />
                );
              })}
              <Gap width={16} />
            </View>
          </ScrollView>
        </View>
        {/* End Rated Doctor Component */}

        {/* Start Filter Component */}
        <View style={styles.filterContainer}>
          <View style={styles.containerInput}>
            <TextInput style={styles.input} placeholder="Find Doctors" />
          </View>
          <TouchableOpacity
            style={styles.filter}
            onPress={() => alert('Setting')}
            onLongPress={() => alert('Soon Bro')}>
            <ICFilter />
          </TouchableOpacity>
        </View>
        {/* End Filter Component */}

        {/* Start CardDoctor Component  */}
        <View style={styles.containerList}>
          <View style={styles.listDoctor}>
            {JSONListDoctor.data.map((doctor) => {
              return (
                <CardDoctor
                  key={doctor.id}
                  name={doctor.name}
                  spesialis={category}
                  avatar={doctor.image}
                  hospital={doctor.hospital}
                  onPressMessage={() =>
                    navigation.navigate('Chat', {
                      name: doctor.name,
                      status: 'online',
                      image: doctor.image,
                    })
                  }
                  onPressDoctor={() =>
                    navigation.navigate('ProfileDoctor', {
                      name: doctor.name,
                      avatar: doctor.image,
                      spesialis: category,
                    })
                  }
                />
              );
            })}
          </View>
          <Gap height={20} />
        </View>
        {/* End Card Doctor Component */}
        <View />
      </ScrollView>
    </View>
  );
};

export default ListDoctors;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  textRatedDoctors: {
    paddingLeft: 24,
    fontSize: 18,
    fontFamily: fonts.primary[700],
  },
  listRatedDoctorHorizontal: {
    marginLeft: -24,
  },
  doctor: {
    marginTop: 10,
    flexDirection: 'row',
  },
  filterContainer: {
    marginTop: 15,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerInput: {
    borderRadius: 10,
    backgroundColor: colors.inputText.default,
    flex: 1,
    marginRight: 10,
  },
  input: {
    paddingHorizontal: 14,
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  filter: {
    marginTop: 5,
  },
  containerList: {
    marginTop: 20,
    marginHorizontal: 24,
    flex: 1,
  },
});
