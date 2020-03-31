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
  ageRange
) => ({
  type: types.FETCH_COVID19_SUCCESS,
  lastUpdated,
  daily,
  series,
  prefectures,
  symptoms,
  ageRange,
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
      ageRange,
    } = data;
    dispatch(
      fetchSuccess(lastUpdated, daily, series, prefectures, symptoms, ageRange)
    );
  } catch (error) {
    console.error('covid19 action', error.message);
    dispatch(fetchError(error));
  }
};

export { fetchCovid19 };
