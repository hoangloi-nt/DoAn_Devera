import { Link } from "react-router-dom";
import { hashShortener } from "sdk/iconSDK";


const ProductItem = ({ data, onClick }) => {
    return (
      <Link
        to={`/buy/${data.id}`}
        className="flex flex-row items-center px-4 py-2 hover:bg-secondary"
        onClick={onClick}
      >
        <img
          className="w-10 h-10 rounded-sm object-cover"
          src={data.image}
          alt={data.Name}
        />

        <div className="flex-1 ml-3">
          <h4 className="text-base font-semibold">
            <span>{data.Name}</span>
          </h4>
          <span className="text-sm font-extralight">
            {hashShortener(data.createby.address)}
          </span>
        </div>
      </Link>
    );
}

export default ProductItem;