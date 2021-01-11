import React, {useState} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DUAvatar,
  DUProfileAlbert,
  DUProfileDoctor2,
  DUProfileDoctor4,
  DUProfileDoctor5,
  DUProfileDoctor7,
  DUProfileDoctor8,
  JSONCategoryDoctor,
} from '../../assets';
import {Gap} from '../../components/atoms';
import {
  CardCategory,
  CardNews,
  HomeProfile,
  RatedDoctors,
  RatedHospitals,
} from '../../components/molecules';
import {colors, fonts} from '../../utils';

const Home = ({navigation}) => {
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
      <HomeProfile userProfile={() => navigation.navigate('UserProfile')} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Mau konsultasi dengan siapa hari ini ?
          </Text>
          <View style={styles.horizontalWrapper}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.cardCategory}>
                <Gap width={16} />
                {JSONCategoryDoctor.data.map((item) => {
                  return (
                    <CardCategory
                      key={item.id}
                      category={item.category}
                      onPress={() =>
                        navigation.navigate('ListDoctors', {
                          category: item.category,
                        })
                      }
                    />
                  );
                })}

                <Gap width={16} />
              </View>
            </ScrollView>
          </View>

          <Text style={styles.textDoctor}>Top Rated Doctors</Text>
          <View style={styles.horizontalWrapper}>
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
                      onPress={(name, avatar) =>
                        navigation.navigate('ProfileDoctor', {
                          name: doctor.name,
                          avatar: doctor.avatar,
                          spesialis: doctor.spesialis,
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
          <Text style={styles.textHospitals}>Top Rated Hospitals</Text>
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

          <Text style={styles.textHospitals}>Hot News</Text>

          <View style={styles.news}>
            <CardNews
              title="Saat Para Pramugari Cantik Terdampak Corona, Kini Jualan Sate Hingga Gas"
              publish="AybisSZR"
              date="10 menit yang lalu"
            />
            <CardNews
              title="Habib Rizieq Singgung Lahan PTPN Terlantar, BPN: Kedua Pihak Harus Buktikan"
              publish="AybisSZR"
              date="11 menit yang lalu"
            />
            <CardNews
              title="Rapid Test Antigen Rp 105.000 Kini Tersedia di 25 Stasiun KAI"
              publish="AybisSZR"
              date="12 menit yang lalu"
            />
            <CardNews
              title="Pulihkan Ekonomi Perbatasan, BRI Salurkan BPUM ke Ratusan UMKM"
              publish="AybisSZR"
              date="13 menit yang lalu"
            />
            <CardNews
              title="Larang Batik Air Terbang, Gubernur Kalbar Juga Sentil Kemenhub"
              publish="AybisSZR"
              date="14 menit yang lalu"
            />
            <CardNews
              title="Nggak Cuma Mobil, Beli Boneka Seks di Inggris Bisa 'Test Drive'"
              publish="AybisSZR"
              date="15 menit yang lalu"
            />
            <CardNews
              title="Asosiasi Maskapai Sentil Aturan Larangan Terbang dari Gubernur Kalbar"
              publish="AybisSZR"
              date="16 menit yang lalu"
            />
            <CardNews
              title="Viral Dugaan Pasien-Nakes Mesum Sesama Jenis, Wisma Atlet: Belum Ada Laporan"
              publish="AybisSZR"
              date="17 menit yang lalu"
            />
            <CardNews
              title="Ratusan Wisatawan di Puncak Bogor Di-rapid Antigen, 4 Orang Reaktif"
              publish="AybisSZR"
              date="18 menit yang lalu"
            />
          </View>
        </View>
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default Home;
const windowWith = Dimensions.get('window').width;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    maxWidth: windowWith * 0.6,
    fontFamily: fonts.primary[800],
  },
  cardCategory: {
    paddingTop: 10,
    marginTop: 15,
    flexDirection: 'row',
  },
  horizontalWrapper: {
    marginHorizontal: -16,
  },
  textDoctor: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: fonts.primary[700],
  },
  doctor: {
    flexDirection: 'row',
  },
  textHospitals: {
    marginTop: 10,
    fontSize: 16,
    fontFamily: fonts.primary[700],
  },
  cardHospitals: {
    flexDirection: 'row',
  },
  news: {
    marginTop: 10,
  },
});
