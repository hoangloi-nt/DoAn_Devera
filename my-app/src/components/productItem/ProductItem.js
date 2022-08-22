

const ProductItem = () => {
    return (
      <div className="flex flex-row items-center px-4 py-2 hover:bg-secondary">
        <img
          className="w-10 h-10 rounded-sm object-cover"
          src="https://img.freepik.com/free-vector/vector-illustration-mountain-landscape_1441-71.jpg"
          alt=""
        />

        <div className="flex-1 ml-3">
          <h4 className="text-base font-semibold">
            <span>Badass Apee</span>
          </h4>
          <span className="text-sm font-extralight">
            addressaddress
          </span>
        </div>
      </div>
    );
}

export default ProductItem;