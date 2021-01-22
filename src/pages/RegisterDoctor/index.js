import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { ILLogin } from '../../assets';
import { Button, Dropdown, Gap, Header, Input, Link } from '../../components';
import { Firebase } from '../../config';
import {
  colors,
  fonts,
  showError,
  showSuccess,
  storeData,
  useForm,
} from '../../utils';

const Register = ({ navigation }) => {
  const [form, setForm] = useForm({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    category: '',
    sex: '',
    about: '',
    rate: '',
    hospital: '',
    type: 'doctor',
  });
  const dispatch = useDispatch();

  const onChangeSex = (val) => {
    setForm('sex', val);
  };
  const onChangeCategory = (val) => {
    setForm('category', val);
  };
  const onChangeHospital = (val) => {
    setForm('hospital', val);
  };

  const onContinue = () => {
    dispatch({
      type: 'SET_LOADING',
      value: true,
    });

    // Create username and password
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        //declare variable for collect data when store to database
        const data = {
          fullName: form.fullName,
          phone: form.phone,
          email: form.email,
          category: form.category,
          sex: form.sex,
          rate: form.rate,
          about: form.about,
          hospital: form.hospital,
          type: form.type,
          uid: success.user.uid,
        };

        // set false for turn off loading screen
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });
        // insert data to database
        Firebase.database().ref(`doctors/${success.user.uid}/`).set(data);
        // storeData to localStorage with key user and value form
        storeData('user', data);
        // reset every form
        setForm('reset');

        setTimeout(() => {
          showSuccess(
            'Register Success',
            `Your account with email "${success.user.email}" has successfully registered`,
          );
        }, 3000);

        navigation.replace('UploadPhoto', data);
      })
      .catch((error) => {
        dispatch({
          type: 'SET_LOADING',
          value: false,
        });

        showError(error);
      });
  };
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} />
        <View style={styles.header}>
          <ILLogin />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>Create Account Doctor</Text>

          <Input
            label="Full name"
            value={form.fullName}
            onChangeText={(value) => setForm('fullName', value)}
          />
          <Gap height={10} />

          <Input
            label="Email"
            type="email"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <Gap height={10} />

          <Dropdown
            label="Dokter Spesialis"
            type="dokter"
            selectedValue={form.category}
            onChange={(itemValue, itemIndex) => onChangeCategory(itemValue)}
            listItem={['kandungan', 'anak', 'jantung', 'bedah', 'umum']}
          />
          <Gap height={10} />

          <Dropdown
            label="Rumah Sakit"
            type="RS"
            selectedValue={form.hospital}
            onChange={(itemValue, itemIndex) => onChangeHospital(itemValue)}
            listItem={[
              'Siloam Internasional',
              'Dewi Sri',
              'Bayukarta',
              'Mitra Keluarga',
              'Mandaya',
            ]}
          />
          <Gap height={10} />

          <Input
            label="Phone"
            type="number"
            value={form.phone}
            onChangeText={(value) => setForm('phone', value)}
          />
          <Gap height={10} />

          <Dropdown
            label="Jenis Kelamin"
            selectedValue={form.sex}
            onChange={(itemValue, itemIndex) => onChangeSex(itemValue)}
            listItem={['pria', 'wanita']}
          />
          <Gap height={10} />

          <Input
            label="Rating"
            type="number"
            value={form.rate}
            onChangeText={(value) => setForm('rate', value)}
          />
          <Gap height={10} />

          <Input
            label="About Me"
            value={form.about}
            multiline
            onChangeText={(value) => setForm('about', value)}
          />

          <Gap height={10} />

          <Input
            label="Password"
            type="password"
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />

          <Gap height={22} />
          <Button title="Sign Up" onPress={onContinue} />
          <Gap height={10} />
          <TouchableOpacity onPress={() => navigation.replace('Login')}>
            <Link
              label="I'm already member. Sign In"
              align="center"
              size={16}
            />
          </TouchableOpacity>
          <Gap height={20} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: fonts.primary[700],
    textAlign: 'center',
    marginBottom: 10,
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 10,
    paddingHorizontal: 30,
    flex: 1,
  },
  container: {
    marginTop: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    fontFamily: fonts.primary[400],
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
  dropdown: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});
