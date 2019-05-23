import axios from 'axios';

const KEY = 'AIzaSyAXNUAMCbtVEz3ho7rypuHghSNlu9ktAoQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
