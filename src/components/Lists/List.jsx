import { useEffect, useState } from "react";
import Card from "../card/Card";
import banner from "../../assets/Donation.png";
import { useRef } from "react";

const List = () => {
  const [lists, setLists] = useState([]);
  const [list, setList] = useState([]);

  const setAll = (data) => {
    setList(data);
    setLists(data);
  };

  useEffect(() => {
    fetch("card.json")
      .then((res) => res.json())
      .then((data) => setAll(data));
  }, []);

  const inputRef = useRef(null);

  function handleClick() {
    console.log(inputRef.current.value);

    const inputValue = inputRef.current.value;

    const inputList = lists.filter(
      (item) => inputValue.toLowerCase() === item.category.toLowerCase()
    );

    setList(inputList);
  }
  return (
    <>
      <div
        className="hero w-full min-h-[70vh] mb-20"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-white  bg-opacity-[0.95] "></div>
        <div className="hero-content w-full text-center text-neutral-content">
          <div className=" text-black">
            <h1 className="mb-5 text-5xl font-bold">
              I Grow By Helping People In Need
            </h1>

            <div>
              <input
                className="rounded-l-lg border-l border-t border-b px-4 py-4 w-80"
                ref={inputRef}
                placeholder="Search"
                type="text"
                id="message"
                name="message"
              />

              <button
                className="border-r border-t border-b px-7 py-4 rounded-r-lg text-base text-white font-medium bg-[#ff444a]"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 justify-items-center lg:grid-cols-4 gap-6">
        {list.map((list) => (
          <Card key={list.id} list={list}></Card>
        ))}
      </div>
    </>
  );
};

export default List;
