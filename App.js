/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import store from './src/store';
import { Provider } from 'react-redux';
import Navigations from "./src/Navigation";

const App = () => {
  return (
    <Provider store={store}>
        <Navigations />
    </Provider>
  );
};


export default App;
