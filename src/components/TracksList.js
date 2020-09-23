import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {tracksList} from '../services';
import trackListResponseCleaner from '../utils/TrackListResponseCleaner';
import Track from './Track';
import TrackLoading from './TrackLoading';
import FlatListEndReached from './FlatListEndReached';
import TrackLoadingFull from './TrackLoadingFull';

/*
 TODO: [x] Remove limit of pages that set during checking end of results.
 TODO: Remove all debugging logging statements
 TODO: Handle edge case - Device offline
 TODO: Handle error case
*/

const TracksList = ({id, artist}) => {
  const [tracks, setTracks] = useState([]); // array of all tracks
  const [isLoading, setIsLoading] = useState(true); // tracking init loading status
  const [isFeatching, setIsFeatching] = useState(true); // tracking server fecth request status
  const [error, setError] = useState(null); // tracking if have any error during featching
  const [nextPage, setNextPage] = useState(1); // track the next page number
  // wrapper for tracks api calling
  const loadTracks = (page) => {
    setIsFeatching(true); // start fetching
    tracksList(id, page, 'popularity', 20)
      .then((res) => res.data)
      .then((res) => {
        // check if server send status of success (200)
        if (res.meta.status == 200) {
          // check length of songs array
          if (res.response.songs.length > 0) {
            // extract only required information from server response
            const tracksList = trackListResponseCleaner(res.response.songs);
            // append tracklist to state `tracks`
            setTracks((prev) => [...prev, ...tracksList]);
            setIsFeatching(false); // set fetching state false
            setError(null); // set error to null
            setNextPage(res.response.next_page); // set next page number to next page number from server response
          }
        } else {
          // error occured perform error state update and loading state false
          setError(res.meta.message);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        // server request faild due to any resonse - set error state and loading state
        console.warn(err);
        setIsLoading(false);
        setError('Something went wrong.');
      })
      .finally(() => {
        // if init loading state true then set it to false
        if (isLoading) {
          setIsLoading(false);
        }
      });
  };
  // ComponentDidMount
  useEffect(() => {
    loadTracks(1);
  }, []);
  // FlatList Helper Function for render items
  const tracksListRenderItem = ({item}) => {
    return (
      <Track
        id={item.id}
        title={item.title}
        primaryArtist={item.primary_artist}
        thumbnail={item.thumbnail_url}
        artist={artist}
      />
    );
  };
  // FlatList Helper Function for load more data on scroll
  const getMoreTracks = () => {
    if (nextPage !== null && !isFeatching) {
      loadTracks(nextPage);
    }
  };
  // FlatList Helper Function for getting last child of list or footer of list
  renderListFooter = () => {
    if (nextPage == null) {
      return <FlatListEndReached />;
    } else if (isFeatching) {
      return <TrackLoading />;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <TrackLoadingFull />
      ) : (
        <FlatList
          data={tracks}
          renderItem={tracksListRenderItem}
          keyExtractor={(item) => `${item.id}`}
          onEndReached={getMoreTracks}
          onEndReachedThreshold={0.8}
          ListFooterComponent={renderListFooter}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TracksList;
