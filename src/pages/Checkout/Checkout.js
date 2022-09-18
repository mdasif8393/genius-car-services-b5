import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const {serviceId} = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId : serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value
    }
    axios.post('http://localhost:5000/order', order)
    .then(response => {
      const {data} = response;
      if(data.insertedId) {
        toast("Your order is booked");
        event.target.reset();
      }
    })
  }
  
  // const [users, setUsers] = useState({
  //   name: 'Asif', 
  //   email: 'aa@aa.com',
  //   service: "bekar",
  //   address: "khulna",
  //   phone: '01010101'
  // })

  // const handleNameChange = (e) => {
  //   const {name, ...rest} = users;
  //   const newName = e.target.value;
  //   const newUser = {newName, ...rest};
  //   setUsers(newUser);
  // }
  return (
    <div className="w-50 mx-auto">
      <h2>Please order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input className="w-100 mb-2" type="text" name="name" value={user?.displayName} disabled placeholder="name" required id="" />
        <input className="w-100 mb-2" type="text" name="email" value={user?.email} disabled placeholder="email" required id="" />
        <input className="w-100 mb-2" type="text" name="service" value={service?.name} disabled placeholder="service" required id="" />
        <input className="w-100 mb-2" type="text" name="address" placeholder="address" required id="" />
        <input className="w-100 mb-2" type="text" name="phone" placeholder="phone" required autocomplete="off" id="" />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
