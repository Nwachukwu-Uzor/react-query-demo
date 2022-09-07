import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
} from "react-query";
import { request } from "../utils/axios-utils";

const fetchHeroes = () => {
  return request({ url: "/superheros" });
};

const addSuperHero = (hero) => {
  // return axios.post("http://localhost:4000/superheros", hero);
  return request({ url: "/superheros", method: "POST", data: hero });
};

export const useSuperHerosData = (onSuccess, onError) => {
  return useQuery("super-heros", fetchHeroes, {
    // enabled: false,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   // queryClient.invalidateQueries("super-heros");
    //   queryClient.setQueryData('super-heros', (oldData) => {
    //     return {
    //       ...oldData,
    //       data: [...oldData.data, data.data]
    //     }
    //   })
    // },
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heros");
      const previousHeroData = queryClient.getQueryData("super-heros");

      queryClient.setQueryData("super-heros", (oldData) => {
        return {
          ...oldData,
          data: [
            ...oldData.data,
            { id: oldData?.data?.length + 1, ...newHero },
          ],
        };
      });
      return { previousHeroData };
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData("super-heros", context.previousHeroData);
    },
    onSettled: () => {
      queryClient.invalidateQueries("super-heros");
    },
  });
};
