import React from "react";

const TShirt = ({ tShirt, handlerAddToCart }) => {
//   console.log(tShirt);
  const { price, picture, name } = tShirt;
  return (
    <div className="border-2 p-4 rounded-md text-center flex flex-col">
      <img src={picture} alt="t-shirt" className="w-52" />
      <h3 className="text-xl font-bold my-2">{name}</h3>
      <p className="mb-2">
        Price: <span className="text-yellow-500 font-semibold">${price}</span>
      </p>
      <button
        onClick={() => handlerAddToCart(tShirt)}
        className="border-2 border-cyan-900 mt-auto w-full p-2 rounded-lg font-bold hover:bg-slate-300"
      >
        Buy Now
      </button>
    </div>
  );
};

export default TShirt;
