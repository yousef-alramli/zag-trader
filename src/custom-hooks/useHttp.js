import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/loaderReducer";

const useHttp = () => {
  const dispatch = useDispatch();

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    // next code if auth is needed
    headers: {
      Authorization: 'Some Authorization'
    }
  });

  return async (...args) => {
    dispatch(setLoading(true));
    const res = await axiosInstance(...args);
    dispatch(setLoading(false));
    return res
  };
}

export default useHttp;
