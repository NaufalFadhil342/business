import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASEURL;
const accessKey = process.env.REACT_APP_ACCESSKEY;

export const getPhotos = async () => {
  const photos = await axios.get(`${baseUrl}/photos/random`, {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: {
      query: 'business',
      orientation: 'landscape',
      content_filter: 'low',
      count: 30,
    },
  });

  return photos.data;
};
