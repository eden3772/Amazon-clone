import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Auth from "./Pages/Auth/Auth";
import Payment from "./Pages/Payment/Payment";
import Order from "./Pages/Order/Order";
import Cart from "./Pages/Cart/Cart";
import Results from "./Pages/Results/Results";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRouter from "./Components/ProtectedRoute/ProtectedRouter";
const Routing = () => {
  const stripePromise = loadStripe(
    "pk_test_51IdQOWK2BPz2mbnn8bduTAty0M1dQKfvea3eT5ztjA27cJlkLmF2kdD6SCwTeFSCaAXYArAfJkCRibpozTgtPO0A003fFgrixg"
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/Payment"
          element={
            <ProtectedRouter
              msg={"you must log in to pay"}
              redirect={"/Payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRouter>
          }
        />
        <Route
          path="/Orders"
          element={
            <ProtectedRouter
              msg={"you must log in to access your orders"}
              redirect={"/Orders"}
            >
              <Order />
            </ProtectedRouter>
          }
        />
        <Route path="/Catagory/:CatagoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
