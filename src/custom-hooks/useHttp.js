import axios from "axios";

const useHttp = () => {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // next code if auth is needed
    headers: {
      Authorization: 'Some Authorization'
    }
  });

  return axiosInstance;
}

export default useHttp;
