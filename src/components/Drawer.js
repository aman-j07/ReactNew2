import React from "react";
import { Drawer, Typography } from "@mui/material";

export const Cart = (props) => {
  if (props.cart.length > 0) {
    return (
      <>
        <Drawer
          id="divCart"
          anchor="right"
          open={props.isDrawerOpen}
          onClose={() => {
            props.setIsDrawerOpen(false);
          }}
        >
          <Typography variant="h3"> Cart</Typography>
          <table id="cartTable">
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            {props.cart.map((item, i) => {
              return (
                <tr>
                  <td>
                    <img src={item.image} />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.subtotal}</td>
                  <td>
                    <button index={i} onClick={props.Remove}>
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
          <p id="paraSTotal">Subtotal: ₹{props.total}</p>
          <p id="paraTaxes">Taxes: ₹100</p>
          <p id="paraGTotal">Grand Total:₹{props.total+100}</p>
        </Drawer>
      </>
    );
  }
  else{
    return(
        <Drawer
          id="divCart"
          anchor="right"
          open={props.isDrawerOpen}
          onClose={() => {
            props.setIsDrawerOpen(false);
          }}
        >
        <p>The cart is empty. Go add some items...</p>
        </Drawer>

    )
  }
};
