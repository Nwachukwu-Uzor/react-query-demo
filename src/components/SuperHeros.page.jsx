import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHerosPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:4000/superheros");
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h5>Loading....</h5>;
  }

  if (error.trim().length) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <h2>Super Hero Page</h2>
      {data.map((hero) => (
        <div key={hero.id}>{hero.name}</div>
      ))}
    </>
  );
};

export default SuperHerosPage;
