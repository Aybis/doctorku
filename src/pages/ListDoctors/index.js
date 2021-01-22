import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ICFilter, JSONListDoctor } from '../../assets';
import { CardDoctor, Gap, Header, RatedDoctors } from '../../components';
import { Firebase } from '../../config';
import { colors, fonts, showError } from '../../utils';

const ListDoctors = ({ navigation, route }) => {
  const itemCategory = route.params;
  const [rateDoctor, setrateDoctor] = useState([]);

  useEffect(() => {
    getCategoryDoctor(itemCategory.category);
  }, [itemCategory.category]);

  const getCategoryDoctor = (category) => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setrateDoctor(data);
        } else {
          return 'Doctor Not Found';
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      {/* Start Header Component */}
      <Header
        title={`Doctor ${itemCategory.category}`}
        onPress={() => navigation.goBack()}
      />
      {/* End Header Component */}

      {/* Start Rated Doctor Component */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ratedDoctors}>
          <Text style={styles.textRatedDoctors}>Top Rated Doctors</Text>
          <View style={styles.listRatedDoctorHorizontal} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.doctor}>
              <Gap width={16} />
              {rateDoctor.map((doctor) => {
                return (
                  <RatedDoctors
                    key={`doctor-${doctor.id}`}
                    name={doctor.data.fullName}
                    spesialis={doctor.data.category}
                    rate={doctor.data.rate}
                    avatar={{ uri: doctor.data.photo }}
                    onPress={() => navigation.navigate('ProfileDoctor', doctor)}
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
                  name={doctor.fullName}
                  spesialis={doctor.category}
                  avatar={doctor.image}
                  hospital={doctor.hospital}
                  onPressMessage={() => alert('disable dlu ya bro')}
                  onPressDoctor={() => alert('Disable dlu ya bro')}
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
