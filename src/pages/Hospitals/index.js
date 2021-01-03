import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap, Search} from '../../components/atoms';
import {CardHospitals, RatedHospitals} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  var list = [];
  const ListHospitals = () => {
    for (let index = 0; index < 10; index++) {
      list.push(<CardHospitals key={index} />);
    }
    return list;
  };
  return (
    <View style={styles.page}>
      <Text style={styles.header}>Hospitals</Text>
      <View style={styles.searchBar}>
        <Search title="Hospitals" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.textHospitals}>Nearby Hospitals</Text>
          <View style={styles.horizontalWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.cardHospitals}>
                <Gap width={16} />
                <RatedHospitals
                  name="Siloam Internasional Karawaci"
                  address="Jl"
                  rating={5}
                />
                <RatedHospitals
                  name="RS Sadikin Bandung"
                  address="Jl"
                  rating={5}
                />
                <RatedHospitals
                  name="RS Siloam Karawaci"
                  address="Jl"
                  rating={5}
                />
                <RatedHospitals name="RS Dewi Sri" address="Jl" rating={5} />
                <RatedHospitals name="RS Bayukarta" address="Jl" rating={5} />
                <RatedHospitals
                  name="RS Mitra Keluarga"
                  address="Jl"
                  rating={5}
                />
              </View>
            </ScrollView>
          </View>

          <Text style={styles.textHospitals}>List Hospitals</Text>
          <View style={styles.list}>
            <ListHospitals />
          </View>
        </View>
        <Gap height={20} />
      </ScrollView>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  searchBar: {
    paddingHorizontal: 24,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  header: {
    paddingTop: 30,
    paddingHorizontal: 24,
    fontSize: 30,
    fontFamily: fonts.primary[700],
  },
  horizontalWrapper: {
    marginHorizontal: -16,
  },
  textHospitals: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: fonts.primary[700],
  },
  cardHospitals: {
    flexDirection: 'row',
  },
  list: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
