import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');

const TrackLoading = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./animation.json')}
        autoPlay
        loop
        style={styles.lottieView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
  },
  lottieView: {
    height: 60,
    width: width,
    alignSelf: 'center',
  },
});

export default TrackLoading;
