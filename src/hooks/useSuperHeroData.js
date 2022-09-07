import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
  return axios.get(`http://localhost:4000/superheros/${queryKey[1]}`);
};

export const useSuperHeroData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["super-hero", heroId], fetchSuperHero, {
    initialData: () => {
      const hero = queryClient
        .getQueryData("super-heros")
        ?.data?.find((hero) => hero.id === ++heroId);
      if (hero) {
        return {
          data: hero,
        };
      }

      return undefined;
    },
  });
};
