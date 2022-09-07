import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchColors = ({ queryKey }) => {
  return axios.get(
    `http://localhost:4000/colors?_limit=2&_page=${queryKey[1]}`
  );
};

const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(2);
  const { isLoading, isError, error, data } = useQuery(
    ["colors", pageNumber],
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
        <button onClick={() => {setPageNumber(prev => prev - 1)}}>Prev</button>
        <button onClick={() => {setPageNumber(prev => prev + 1)}}>Next</button>
      </div>
    </>
  );
};

export default PaginatedQueriesPage;
