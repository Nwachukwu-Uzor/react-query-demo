import { useQuery} from "react-query"
import axios from "axios"

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes")
}

const fetchFriend = () => {
  return axios.get("http://localhost:4000/friends")
}

const ParallelQueriesPage = () => {
  return (
    <div>ParallelQueriesPage</div>
  )
}

export default ParallelQueriesPage