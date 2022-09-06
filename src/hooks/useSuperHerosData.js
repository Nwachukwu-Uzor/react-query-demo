import axios from "axios";
import { useQuery } from "react-query";

const fetchHeroes = () => {
  return axios.get("http://localhost:4000/superheros");
};

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heros", fetchHeroes, {
    enabled: false,
    onSuccess: onSuccess,
    onError: onError,
  });
};
