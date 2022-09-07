import { useState } from "react";
import { Link } from "react-router-dom";
import { useSuperHerosData, useAddSuperHeroData } from "../hooks/useSuperHerosData";

const RQSuperHerosPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };
  const onError = () => {
    console.log("Perform side effect after encountering error");
  };

  const {mutate: addHero, isLoading: posting} = useAddSuperHeroData()

  const handleClick = () => {
    const hero = {name, alterEgo}
    addHero(hero)
  }

  const { isLoading, isError, error, data, refetch, isFetching } =
    useSuperHerosData(onSuccess, onError);
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHerosPage</h2>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleClick}>Add Hero</button>
      </div>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data?.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
      <div>{posting && 'adding superhero' }</div>
    </>
  );
};

export default RQSuperHerosPage;
