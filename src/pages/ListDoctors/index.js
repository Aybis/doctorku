import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICFilter} from '../../assets';
import {CardDoctor, Gap, Header, RatedDoctors} from '../../components';
import {colors, fonts} from '../../utils';

const ListDoctors = ({navigation}) => {
  let list = [];
  const ListDoctorScroll = () => {
    for (let index = 0; index < 10; index++) {
      list.push(
        <CardDoctor
          key={index}
          onPressMessage={() => navigation.navigate('Chat')}
        />,
      );
    }
    return list;
  };
  return (
    <View style={styles.page}>
      {/* Start Header Component */}
      <Header title={'Doctor '} onPress={() => navigation.goBack()} />
      {/* End Header Component */}

      {/* Start Rated Doctor Component */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ratedDoctors}>
          <Text style={styles.textRatedDoctors}>List Doctors</Text>
          <View style={styles.listRatedDoctorHorizontal} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.doctor}>
              <Gap width={16} />
              <RatedDoctors
                name="Frisca Putri"
                hospital="Siloam International"
                rate={5}
              />
              <RatedDoctors
                name="Ayu Putri"
                hospital="RS Sadikin Bandung"
                rate={5}
              />
              <RatedDoctors
                name="Rena Grande"
                hospital="RS Bayukarta"
                rate={5}
              />
              <RatedDoctors
                name="Valencia"
                hospital="RS Jatung Nasional"
                rate={5}
              />
              <RatedDoctors
                name="Tanoesoedibjo"
                hospital="RS Mandaya"
                rate={5}
              />
              <RatedDoctors name="Ayu Shella" hospital="RS Dewi Sri" rate={5} />
              <RatedDoctors
                name="Ariana"
                hospital="Siloam International"
                rate={5}
              />
              <RatedDoctors
                name="Anya Ger"
                hospital="Siloam International"
                rate={5}
              />
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
            <ListDoctorScroll />
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
