import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { removeFromCart, updateQuantity } from "../../redux/cartSlice";
import "./Cart.css";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize navigation

  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, totalPrice } }); // Pass cart data
  };

  const handleQuantityChange = (id, type) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      const newQuantity =
        type === "increase"
          ? item.quantity + 1
          : Math.max(1, item.quantity - 1);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id, title) => {
    dispatch(removeFromCart(id));
    alert(`${title} removed from cart!`);
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <table className="cart-table">
            <thead>
              <tr>
                <th className="cart-header">Product</th>
                <th className="cart-header">Quantity</th>
                <th className="cart-header">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="cart-item-row">
                  <td className="cart-product">
                    <img
                      className="cart-item-img"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="cart-item-info">
                      <h4 className="cart-item-title">{item.title}</h4>
                      <p className="cart-item-price">Price: ${item.price}</p>
                      <button
                        className="cart-remove-btn"
                        onClick={() => handleRemoveItem(item.id, item.title)}
                      >
                        Remove
                      </button>
                    </div>
                  </td>
                  <td className="cart-quantity">
                    <button
                      className="cart-quantity-btn"
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                    >
                      -
                    </button>
                    <span className="cart-quantity-value">{item.quantity}</span>
                    <button
                      className="cart-quantity-btn"
                      onClick={() => handleQuantityChange(item.id, "increase")}
                    >
                      +
                    </button>
                  </td>
                  <td className="cart-subtotal">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <p className="cart-summary-text">
              Subtotal: ${totalPrice.toFixed(2)}
            </p>
            <p className="cart-summary-text">
              Tax: ${(totalPrice * 0.175).toFixed(2)}
            </p>
            <p className="cart-total">
              Total: ${(totalPrice * 1.175).toFixed(2)}
            </p>
            <button className="cart-checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout →
            </button>{" "}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
