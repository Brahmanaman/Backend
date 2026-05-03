import React from "react";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    category: "MEN",
    currency: "INR",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let result = await axios.post("http://localhost:3000/create-product", formData);
      console.log(result);
    } catch (err) {
      console.log("error while submitting form", err);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Product Details</legend>
          <label htmlFor="">Product Name</label>
          <input
            onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
            type="text"
            placeholder="Enter Product Name"
          />
          <br />

          <label htmlFor="">Description</label>
          <input
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            type="text"
            placeholder="Enter product Description"
          />
          <br />
          <label htmlFor="">Category</label>
          <select defaultValue="MEN" onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
          <br />
          <label htmlFor="">Amount</label>
          <input
            onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
            type="number"
            name=""
            id=""
            placeholder="Enter Amount"
          />
          <br />
          <label htmlFor="">Currency</label>
          <select defaultValue="INR" onChange={(e) => setFormData({ ...formData, currency: e.target.value })}>
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
          <br />
          <label htmlFor="">Stock</label>
          <input
            onChange={(e) => setFormData({ ...formData, stock: Number(e.target.value) })}
            type="number"
            placeholder="Enter stock"
          />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
};

export default App;
