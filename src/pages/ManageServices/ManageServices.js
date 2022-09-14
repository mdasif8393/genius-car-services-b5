import React from "react";
import useServices from "../../hooks/useService";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete this service?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div>
      <h3>Manage your services</h3>
      {services.map((service) => (
        <div key={service._id}>
          <h5>{service.name}</h5>{" "}
          <button onClick={() => handleDelete(service._id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
