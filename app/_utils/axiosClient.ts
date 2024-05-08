import axios from 'axios';

const apiKey :string | undefined = process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl:string = `http://localhost:1337/api`;

const axiosClient = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiKey}`,
  }
});

export default axiosClient;