import types from './types';

// Removed API Endpoint for Github Pages so storing data public
const DEFAULT_PATH = './data/covid19.json';

const fetchBegin = () => ({
  type: types.FETCH_COVID19_BEGIN,
});

const fetchSuccess = (
  lastUpdated,
  daily,
  series,
  prefectures,
  symptoms,
  ageGender
) => ({
  type: types.FETCH_COVID19_SUCCESS,
  lastUpdated,
  daily,
  series,
  prefectures,
  symptoms,
  ageGender,
});

const fetchError = error => ({
  type: types.FETCH_COVID19_FAILURE,
  error,
});

const fetchCovid19 = (url = DEFAULT_PATH) => async dispatch => {
  dispatch(fetchBegin());
  try {
    const res = await fetch(url);
    const data = await res.json();
    const {
      lastUpdated,
      daily,
      series,
      prefectures,
      symptoms,
      ageGender,
    } = data;
    dispatch(
      fetchSuccess(lastUpdated, daily, series, prefectures, symptoms, ageGender)
    );
  } catch (error) {
    console.error('covid19 action', error.message);
    dispatch(fetchError(error));
  }
};

export { fetchCovid19 };
