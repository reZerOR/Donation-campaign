import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";

const CardDetails = () => {
  const { id } = useParams();

  const cards = useLoaderData();
  const findCard = cards.find((card) => card.id == id);
  console.log(findCard);

  return <div>{<CardDetail card={findCard}></CardDetail>}</div>;
};

export default CardDetails;
