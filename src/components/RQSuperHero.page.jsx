import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

const RQSuperHeroPage = () => {
  const { superHeroId } = useParams();

  const { error, data, isLoading, isError } = useSuperHeroData(superHeroId);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return <div>{data?.data?.name} - {data?.data?.alterEgo}</div>;
};

export default RQSuperHeroPage;
