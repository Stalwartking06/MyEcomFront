import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalPrice = location.state?.totalPrice || 0;

  const handlePayment = async () => {
    try {
      // ✅ Create an order in the backend
      const { data: order } = await axios.post("http://localhost:5000/create-order", {
        amount: totalPrice * 100, // ✅ Convert to paise here only
      });

      const options = {
        key: "rzp_test_dTeUn1kZaIPjh4", // ✅ Correct key
        amount: order.amount,
        currency: order.currency,
        name: "Your Store",
        description: "Test Transaction",
        image: "https://your-logo-url.com/logo.png",
        order_id: order.id, // ✅ Order ID from backend
        handler: async (response) => {
          alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);

          // ✅ Verify payment on backend
          await axios.post("http://localhost:5000/verify-payment", response);
          
          navigate("/order-confirmation");
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Payment Error:", error);
      alert("Payment Failed");
    }
  };

  return (
    <div className="payment-container">
      <h2>Complete Your Payment</h2>
      <p>Total Amount: ₹{totalPrice.toFixed(2)}</p>
      <button className="pay-btn" onClick={handlePayment}>
        Pay with Razorpay
      </button>
    </div>
  );
};

export default Payment;
