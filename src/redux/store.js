import {useState} from 'react';

// const [Profile, setProfile] = useState();
import {createStore} from 'redux';

const initialState = {
  loading: false,
  name: 'Abdul Muchtar',
  address: 'Amsterdams',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
