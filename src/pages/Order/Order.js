import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(()=>{

        const getOrders = async ()=>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url); // need data inside response so destructure data from res
            setOrders(data);
        }
        getOrders();
    },[user])

    return (
        <div>
            <h2>Your orders:{orders.length}</h2>
        </div>
    );
};

export default Order;