import { useQueries, useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = ({ queryKey }) => {
  return axios.get(`http://localhost:4000/users/${queryKey[1]}`);
};

const fetchCoursesByChannelId = ({ queryKey }) => {
  return axios.get(`http://localhost:4000/channels/${queryKey[1]}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], fetchUserByEmail);
  const { channelId } = user?.data;

  useQuery(["courses", channelId], fetchCoursesByChannelId, {
    enabled: !!channelId,
  });
  
  return <div>DependentQueriesPage</div>;
};

export default DependentQueriesPage;
