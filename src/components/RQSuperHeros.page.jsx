import { Link, Outlet } from "react-router-dom";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

const RQSuperHerosPage = () => {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching");
  };
  const onError = () => {
    console.log("Perform side effect after encountering error");
  };

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
      <div>RQSuperHerosPage</div>
      <button onClick={refetch}>Fetch heroes</button>
      {data?.data?.map((hero) => (
        <div key={hero.id}>
          <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>
      ))}
    </>
  );
};

export default RQSuperHerosPage;
