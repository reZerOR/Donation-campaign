import { useState } from "react";
import NoDonation from "./NoDonation";
import YesDonation from "./YesDonation";
import { useEffect } from "react";

const Donation = () => {
  const [cards, setCards] = useState([]);
  const [btn, setBtn] = useState(false);

  useEffect(() => {
    const sotoredCard = JSON.parse(localStorage.getItem("card-list"));
    if (sotoredCard) {
      setCards(sotoredCard);
    }
  }, []);
  const handleBtn = () => {
    setBtn(!btn);
  };
  console.log(cards);
  return (
    <div>
      {cards.length ? (
        <div className="my-20 grid grid-cols-1 lg:grid-cols-2 mx-1 lg:mx-0 gap-6">
          {!btn
            ? cards
                .slice(0, 4)
                .map((card) => (
                  <YesDonation key={card.id} card={card}></YesDonation>
                ))
            : cards.map((card) => (
                <YesDonation key={card.id} card={card}></YesDonation>
              ))}
        </div>
      ) : (
        <NoDonation></NoDonation>
      )}
      <div className="flex justify-center">
        {cards.length > 4 && !btn && (
          <button
            onClick={handleBtn}
            className="rounded-lg py-[14px] px-6 mb-20 text-base text-white font-semibold bg-green-600"
          >
            See All
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
