import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetail.css";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const checkOut = () => {
    navigate("/checkout");
  };
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <h1>Service detail: {service.name}</h1>
      <button onClick={checkOut}>Checkout</button>
    </div>
  );
};

export default ServiceDetail;
