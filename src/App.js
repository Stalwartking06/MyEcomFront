import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, removeUser } from "./redux/userSlice";
import { fetchUserData, logoutUser } from "./api"; // ✅ Import API calls
import Head from "./components/Navbar/Head";
import Footer from "./components/Footer/Footer";
import HomeContent from "./components/HomeContent/HomeContent";
import Register from "./components/Loggs/Register";
import Login from "./components/Loggs/Login";
import Electronics from "./components/HomeContent/Electronics";
import Jwellary from "./components/HomeContent/Jwellary";
import Clotingm from "./components/HomeContent/ClotingM";
import ClotingW from "./components/HomeContent/ClotingW";
import About from "./components/About/About";
import Serv from "./components/Service/Serv";
import Category from "./components/Category/Category";
import View from "./components/View Product/View";
import "./App.css";
import Cart from "./components/View Product/Cart";
import CheckoutForm from "./components/View Product/CheckoutForm";
import Payment from "./components/View Product/Payment";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const loadUser = async () => {
      const userData = await fetchUserData();
      if (userData) {
        dispatch(setUser(userData)); // ✅ Set user if logged in
      } else {
        dispatch(removeUser());
      }
    };

    loadUser();
  }, [dispatch]);

  const handleLogout = async () => {
    await logoutUser();
    dispatch(removeUser()); // ✅ Remove user from Redux
  };

  return (
    <Router>
      <div>
        <Head user={user} onLogout={handleLogout} />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Electronics" element={<Electronics />} />
            <Route path="/Jwellary" element={<Jwellary />} />
            <Route path="/Clotingm" element={<Clotingm />} />
            <Route path="/ClotingW" element={<ClotingW />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Serv />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="/blog" element={<div>Blog Page</div>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
