import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Navigation from './navigation';
import Routes from './routes';
function App() {
  return (
    <Provider store={store}>
      <HashRouter basename="/">
        <Navigation />
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default App;
