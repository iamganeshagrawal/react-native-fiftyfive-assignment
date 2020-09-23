export default (tracksArray) => {
  let cleanData = new Array(tracksArray.length);
  for (let i = 0; i < tracksArray.length; i++) {
    cleanData[i] = {
      id: tracksArray[i].id,
      title: tracksArray[i].title,
      full_title: tracksArray[i].full_title,
      title_with_featured: tracksArray[i].title_with_featured,
      primary_artist: tracksArray[i].primary_artist.name,
      thumbnail_url: tracksArray[i].song_art_image_thumbnail_url,
    };
  }
  return cleanData;
};
