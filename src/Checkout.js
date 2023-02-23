import React, { useState } from "react";
import { itemData } from "./itemData";

const Checkout = ({ cartItems, handleCustomerInfo }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const customerInfo = { firstName, lastName, email, phone };
    // handleCustomerInfo(customerInfo);
    alert("Your order is successfully done");
  };

  return (
    <div>
      <h1 className="h1">Checkout</h1>
      {/* <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {itemData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
        <br />
        <button className="bt" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Checkout;
