import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheros");
};

const fetchFriends = () => {
  return axios.get("http://localhost:4000/friends");
};

const ParallelQueriesPage = () => {
  const {} = useQuery("super-heroes", fetchSuperHeroes);

  const {} = useQuery("friends", fetchFriends);

  return <div>ParallelQueriesPage</div>;
};

export default ParallelQueriesPage;
