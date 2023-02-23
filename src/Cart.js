import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./redux/cart";
import "./css/App.css";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const inc = (id) => {
    dispatch(cartAction.inc(id));
  };

  const dec = (id) => {
    dispatch(cartAction.dec(id));
  };

  const deleteItem = (id) => {
    dispatch(cartAction.remove(id));
  };

  const deleteAll = () => {
    dispatch(cartAction.reset());
  };

  const checkout = () => {
    history.push("/checkout");
  };

  return (
    <>
      {cart.length !== 0 ? (
        <>
          <table
            style={{
              width: "100%",
              margin: "30px 0",
              borderCollapse: "collapse"
            }}
          >
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
            {cart.map((e) => {
              return (
                <tr>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.price}</td>
                  <td>{e.price * e.amount}</td>
                  <td>
                    <button onClick={dec.bind(this, e.id)}>-</button> {e.amount}{" "}
                    <button onClick={inc.bind(this, e.id)}>+</button>
                  </td>
                  <td>
                    <button onClick={deleteItem.bind(this, e.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          <button onClick={deleteAll}>Remove All</button>
          <h3>
            Grand Total :{" "}
            {cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0)}
          </h3>
          <button className="btnn" onClick={checkout}>
            Checkout
          </button>
        </>
      ) : (
        <p style={{ fontWeight: "bold" }}>Empty Cart</p>
      )}
    </>
  );
};

export default Cart;
