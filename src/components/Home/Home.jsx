import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "./TShirt/TShirt";
import "./Home.css";
import Cart from "./Cart/Cart";
import toast from "react-hot-toast";


const Home = () => {
  const tShirts = useLoaderData();
  //   console.log(tShirts);
  const [cart, setCart] = useState([]);

    const handlerAddToCart = (tShirt) => {
        const exits = cart.find(ts => ts._id === tShirt._id);
        if (exits) {
            toast("Already Exit");
        } else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    
  };

    const removeItemFromCart = (id) => {
        const restItem = cart.filter(tshirt => tshirt._id !== id);
        setCart(restItem);
  };

  return (
    <div className="Home-container w-max mx-auto">
      <div className="grid md:grid-cols-3 gap-4 my-4">
        {tShirts.map((tShirt) => (
          <TShirt
            key={tShirt._id}
            tShirt={tShirt}
            handlerAddToCart={handlerAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="my-4">
        <Cart cart={cart} removeItemFromCart={removeItemFromCart} />
      </div>
    </div>
  );
};

export default Home;
