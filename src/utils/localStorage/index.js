import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    //   convert data from object to string use stringify
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    //saving error
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      //value previously stored return data to object
      return JSON.parse(value);
    }
  } catch (error) {
    // error reading value
  }
};
