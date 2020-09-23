import axios from 'axios';

const GENIUS_API_URI = 'https://api.genius.com';
const GENIUS_TOKEN = '8PhzFChL-6xvsCTMj037TSQz0k0DCLvxs_TJwCcLzFXnlLQPAVJtvIvdfkkr6QiA';

axios.interceptors.request.use((req) => {
  console.log(`${req.method} ${req.url}`);
  req.headers.authorization = `Bearer ${GENIUS_TOKEN}`;
  return req;
});

export const artistsProfile = (id) => {
  return axios.get(`${GENIUS_API_URI}/artists/${id}?text_format=plain`);
};

/**
 * Return Axios Promise of artist's tracks
 * @param {number} id ID of the artist
 * @param {number} page Paginated offset, (e.g., max=5&page=3 returns songs 11–15)
 * @param {string} sort title | popularity
 * @param {number} max Number of results to return per request
 * @returns Axios Promise
 */
export const tracksList = (id, page = 1, sort = 'title', max = 20) => {
  return axios.get(
    `${GENIUS_API_URI}/artists/${id}/songs?sort=${sort}&per_page=${max}&page=${page}`
  );
}