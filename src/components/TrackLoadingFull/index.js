import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');

const TrackLoadingFull = () => {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('./animation.json')}
        autoPlay
        loop
        style={styles.lottieView}
      />
      <Text style={styles.message}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieView: {
    width: Math.min(300, width * 0.75),
  },
  message: {
    fontSize: 18,
    marginTop: -72,
  },
});

export default TrackLoadingFull;
