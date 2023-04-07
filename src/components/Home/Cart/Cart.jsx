import React from "react";

const Cart = ({ cart, removeItemFromCart }) => {
    let message;
  if (cart.length === 0) {
    message = <p>Add Your Product Here</p>;
  }
  return (
    <div>
      <h1>Order Summary: {cart.length}</h1>
      {message}
      <div>
        {cart.map((tshirt) => (
          <p key={tshirt._id}>
            {tshirt.name}
            <button
              onClick={() => removeItemFromCart(tshirt._id)}
              className="mx-2 border-2 px-2 py-0 bg-gray-300 rounded-md"
            >
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
