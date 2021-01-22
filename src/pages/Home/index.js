import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import axios from 'react-native-axios';
import { ILPhoto } from '../../assets';
import { Gap } from '../../components/atoms';
import {
  CardCategory,
  CardNews,
  HomeProfile,
  RatedDoctors,
  RatedHospitals,
} from '../../components/molecules';
import { Firebase } from '../../config';
import { colors, fonts, getData, showError } from '../../utils';

const Home = ({ navigation }) => {
  const [news, setnews] = useState([]);
  const [categoryDoctor, setcategoryDoctor] = useState([]);
  const [rateDoctor, setrateDoctor] = useState([]);
  const [profile, setprofile] = useState({
    photo: ILPhoto,
    fullName: '',
    email: '',
  });

  useEffect(() => {
    getCategoryDoctor();
    getRatedDoctor();
    getDataNews();
    navigation.addListener('focus', () => {
      getUserData();
    });
  }, [navigation]);

  const getDataNews = () => {
    axios
      .get(
        'http://newsapi.org/v2/top-headlines?country=id&apiKey=f3cdeefc8c064a5f81cb14bddae26292',
      )
      .then((response) => {
        if (response.data) {
          const filterData = response.data.articles.filter((el) => el !== null);
          setnews(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getCategoryDoctor = () => {
    Firebase.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setcategoryDoctor(filterData);
        }
      })
      .catch((err) => {
        showError(err.message, err.desc);
      });
  };

  const getRatedDoctor = () => {
    Firebase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(5)
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
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      data.photo = res?.photo?.length > 1 ? { uri: res.photo } : ILPhoto;
      setprofile(res);
    });
  };

  const checkIfNotDoctor = () => {
    return (
      <>
        {/* Category Doctor  */}
        <View style={styles.horizontalWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.cardCategory}>
              <Gap width={16} />

              {categoryDoctor.map((item) => {
                return (
                  <CardCategory
                    key={`category-${item.id}`}
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

        {/* Top Rated Doctor  */}
        <Text style={styles.textDoctor}>Top Rated Doctors</Text>
        <View style={styles.horizontalWrapper}>
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

        {/* Top Rated Hospital */}

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
      </>
    );
  };

  return (
    <View style={styles.page}>
      <HomeProfile
        onPress={() => navigation.navigate('UserProfile')}
        user={profile}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={styles.title}>
            Mau konsultasi dengan siapa hari ini ?
          </Text>
          {profile.type === 'user' && checkIfNotDoctor()}
          <Text style={styles.textHospitals}>Hot News</Text>
          <View style={styles.news} />
          {news.map((item, index) => {
            return (
              <CardNews
                key={`news-${index}`}
                title={item.title}
                date={item.publishedAt}
                publish={item.source.name}
                image={item.urlToImage}
              />
            );
          })}
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
