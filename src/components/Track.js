import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Track = ({title, thumbnail, primaryArtist}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <View style={styles.trackDetailContainer}>
        <Text style={styles.trackTitle}>{title}</Text>
        <Text style={styles.trackArtist}>{primaryArtist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    paddingVertical: 8,
    borderBottomColor: '#00000050',
    borderBottomWidth: 1,
    overflow: 'hidden',
  },
  thumbnail: {
    width: 54,
    height: 54,
    borderRadius: 2,
    alignSelf: 'center',
  },
  trackDetailContainer: {
    marginLeft: 16,
    marginVertical: 4,
  },
  trackTitle: {
    fontSize: 20,
  },
  trackArtist: {
    fontSize: 12,
    fontStyle: 'italic',
  },
});

export default Track;
