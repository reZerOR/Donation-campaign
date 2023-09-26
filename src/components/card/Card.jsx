import { Link } from "react-router-dom";

const Card = ({ list }) => {
  const { img, card_bg, category, category_bg, title, txt_btn_bg, id } = list;
  return (
    <Link to={`/card/${id}`}>
      <div
        className="card card-compact w-[312px] bg-base-100 shadow-xl"
        style={{ backgroundColor: `${card_bg}` }}
      >
        <figure>
          <img src={img} className="w-full" alt="Shoes" />
        </figure>
        <div className="card-body" style={{ color: `${txt_btn_bg}` }}>
          <div className="text-sm  font-medium inline-flex">
            <h2
              className="px-[10px] py-2 rounded-[4px]"
              style={{ backgroundColor: `${category_bg}` }}
            >
              {category}
            </h2>
          </div>
          <p className="text-xl font-semibold mb-4">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
