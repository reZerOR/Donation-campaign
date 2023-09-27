const YesDonation = ({ card }) => {
  const { rect_img, title, category, category_bg, card_bg, txt_btn_bg, price } =
    card;
  return (
    <div className="card card-side bg-base-100 ">
      <figure>
        <img className="h-full" src={rect_img} alt="Movie" />
      </figure>
      <div
        className="card-body rounded-r-lg"
        style={{ backgroundColor: `${card_bg}`, color: `${txt_btn_bg}` }}
      >
        <div>
          <h2
            className="inline-flex text-sm font-normal py-1 px-[10px] rounded"
            style={{ backgroundColor: `${category_bg}` }}
          >
            {category}
          </h2>
        </div>
        <h2 className="text-black text-2xl font-semibold">{title}</h2>
        <p className="text-base font-semibold">${price}.00</p>
        <div className="card-actions">
          <button
            className="py-[9px] px-4 text-white text-lg font-medium rounded-lg"
            style={{ backgroundColor: `${txt_btn_bg}` }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default YesDonation;
