import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColors = ({ queryKey }) => {
  return axios.get(
    `http://localhost:4000/colors`);
};

const InfiniteQueriesPage = () => {
  const { isLoading, isError, error, data } = useQuery(
    ["colors"],
    fetchColors
  );

  if (isLoading) {
    return <h2>Loading</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          );
        })}
      </div>
      <div>
       
      </div>
    </>
  );
};

export default InfiniteQueriesPage;
