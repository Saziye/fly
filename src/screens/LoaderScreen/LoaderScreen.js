import React, {useRef, useEffect} from 'react';
import LottieView from 'lottie-react-native';

const LoaderScreen = () => (
  <LottieView
    source={require('../../../assets/animations/15206-plane.json')}
    autoPlay
    loop
  />
);
export default LoaderScreen;