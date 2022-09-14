import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = `http://localhost:5000/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    reset();
  };
  return (
    <div className="w-50 mx-auto">
      <h1>Add a service</h1>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input placeholder="name" {...register("name", { required: true })} />
        <input
          placeholder="description"
          {...register("description", { required: true })}
        />
        <input placeholder="price" {...register("price", { required: true })} />
        <input
          placeholder="photo url"
          {...register("img", { required: true })}
        />
        <input type="submit" value="Add a Service" />
      </form>
    </div>
  );
};

export default AddService;
