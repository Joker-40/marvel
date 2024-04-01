import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {getMD5Digest} from './helper/CommoneHelper';
import axios from 'axios';
import {Constants} from './config/Constants';
import Home from './src/screens/Home';

function App(): React.JSX.Element {
  return (
  <SafeAreaView>
    <Home/>
  </SafeAreaView>
  );
}

export default App;
