import types from '../actions/types';

const INITIAL_STATE = {
  lastUpdated: '',
  daily: {},
  series: {},
  prefectures: {},
  symptoms: {},
  ageRange: {},
  isFetching: false,
  error: null,
};

const covid19 = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_COVID19_BEGIN:
      return { ...state, isFetching: true, error: null };
    case types.FETCH_COVID19_SUCCESS:
      const {
        lastUpdated,
        daily,
        series,
        prefectures,
        symptoms,
        ageRange,
      } = action;
      return {
        ...state,
        lastUpdated,
        daily,
        series,
        prefectures,
        symptoms,
        ageRange,
        isFetching: false,
      };
    case types.FETCH_COVID19_FAILURE:
      const { error } = action;
      return { ...state, error, isFetching: false };
    default:
      return state;
  }
};

export default covid19;
