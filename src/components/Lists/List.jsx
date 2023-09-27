import { useEffect, useState } from "react";
import Card from "../card/Card";

const List = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setLists(data));
  }, []);
  return (
    <>
      <div>
        <h3 className="text-5xl font-bold">I Grow By Helping People In Need</h3>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-6">
        {lists.map((list) => (
          <Card key={list.id} list={list}></Card>
        ))}
      </div>
    </>
  );
};

export default List;
