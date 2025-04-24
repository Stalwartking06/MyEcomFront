import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CheckoutForm.css";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "United States",
    state: "",
    zip: "",
    phone: "",
    subscribe: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Shipping Details:", formData);
    navigate("/payment", { state: { totalPrice } });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {/* Cart Summary */}
      <div className="cart-summary">
        <h3>Order Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ${item.price} × {item.quantity}
              </li>
            ))}
          </ul>
        )}
        <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <h3>Contact Information</h3>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />

        <h3>Shipping Address</h3>
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} required />

        <button type="submit" className="submit-btn">
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
