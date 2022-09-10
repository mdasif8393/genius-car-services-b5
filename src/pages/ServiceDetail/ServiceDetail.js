import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetail.css";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const checkOut = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <h1>Service detail: {serviceId}</h1>
      <button onClick={checkOut}>Checkout</button>
    </div>
  );
};

export default ServiceDetail;
