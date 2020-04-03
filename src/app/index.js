import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import Navigation from './navigation';
import Routes from './routes';

function App() {
  const basename = process.env.PUBLIC_URL;
  return (
    <Provider store={store}>
      <Router basename={basename}>
        <Navigation />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
