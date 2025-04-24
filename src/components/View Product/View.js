import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import "./View.css"; // Import the CSS file

function View() {
  const location = useLocation();
  const dispatch = useDispatch();
  const apidata = location.state?.product;
  const [quantity, setQuantity] = useState(1);

  if (!apidata) {
    return <div className="product-not-found">Product not found</div>;
  }

  // const handleQuantityChange = (type) => {
  //   setQuantity((prev) =>
  //     type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
  //   );
  // };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: apidata.id,
        title: apidata.title,
        price: apidata.price,
        image: apidata.image,
        quantity,
      })
    );

    alert(`${apidata.title} added to cart successfully!`);
  };

  return (
    <div className="product-container">
      {/* Left side - Product Image */}
      <div className="product-image">
        <img src={apidata.image} alt={apidata.title} />
      </div>

      {/* Right side - Product Details */}
      <div className="product-details">
        <span className="special-offer">Special Offer</span>
        <h2>{apidata.title}</h2>
        <p className="product-description">{apidata.description}</p>
        <h3 className="product-price">${apidata.price}</h3>

        {/* Color Selection */}
        <div className="product-options">
          <span>Color: </span>
          <div className="color-options">
            <div className="color-circle color-black"></div>
            <div className="color-circle color-gray"></div>
          </div>
        </div>

        {/* Quantity Selector */}
        {/* <div className="quantity-selector">
          <button onClick={() => handleQuantityChange("decrease")}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange("increase")}>+</button>
        </div> */}

        {/* Buttons */}
        <div className="product-buttons">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="wishlist">♡ Save to Wishlist</button>
        </div>
      </div>
    </div>
  );
}

export default View;
