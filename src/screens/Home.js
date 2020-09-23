import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ArtistInfo from '../components/ArtistInfo';
import TracksList from '../components/TracksList';

const Home = ({artist: {id, name, image_url, header_image_url}}) => {
  return (
    <View style={styles.container}>
      <ArtistInfo
        name={name}
        avatar={image_url}
        headerImage={header_image_url}
      />
      <View style={styles.tracksHeader}>
        <Text style={styles.tracksHeaderTitle}>Popular Songs</Text>
      </View>
      <TracksList id={id} artist={name} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  tracksHeader: {
    paddingVertical: 12,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
  },
  tracksHeaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
