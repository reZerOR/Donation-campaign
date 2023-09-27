import { saveCard } from "../utility/LocalStorage";
const CardDetail = ({ card }) => {
  const { img, title, txt_btn_bg, price, description } = card;
  console.log(card);

  const handleStorage = () => {
    saveCard(card);
  };
  return (
    <>
      <div
        className="w-full mt-20 flex flex-col justify-end h-[280px] md:h-[400px] xl:h-[700px] lg:h-[600px] rounded-lg bg-no-repeat bg-cover bg-center  "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="bg-black bg-opacity-50 py-5 flex justify-center md:justify-start rounded-b-lg">
          <button
            className="text-xl font-medium text-white px-6 py-4 ml-5"
            style={{ backgroundColor: `${txt_btn_bg}` }}
            onClick={handleStorage}
          >
            Donate ${price}
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-[40px] font-bold mt-14">{title}</h2>
        <p className="text-base font-normal leading-7 text-justify mb-32">
          {description}
        </p>
      </div>
    </>
  );
};

export default CardDetail;
