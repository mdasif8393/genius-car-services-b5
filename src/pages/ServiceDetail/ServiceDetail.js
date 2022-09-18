import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import "./ServiceDetail.css";
const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);

  const navigate = useNavigate();
  const checkOut = () => {
    navigate(`/checkout/${serviceId}`);
  };
  
  return (
    <div>
    <h1>You are about to book: {service.name}</h1>
    <div className="text-center">  
      <button className="btn btn-primary"onClick={checkOut}>Proceed Checkout</button>
    </div>
    </div>
  );
};

export default ServiceDetail;
