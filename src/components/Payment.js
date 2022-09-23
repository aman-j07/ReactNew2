import React, { useState } from "react";
import amazon from "./amazon.png";
import { Link } from "react-router-dom";

const Payment = (props) => {
    let [paymentStatus,setPaymentStatus]=useState(false)
  const confirmOrder = () => {
    const form = document.getElementById("formPayment");
    const formElements = Array.from(form.elements);
    if(formElements[0].value==12345678 && formElements[1].value==459 && formElements[2].value=="10/25"  && formElements[3].value==100000){
        alert("Payment made successfully")
        setPaymentStatus(true)
        document.getElementById("formPayment").reset();
    }
    else{
        alert("Entered details are wrong!!!")
    }
    document.getElementById("cancelPayment").innerHTML="Go Back to Products"
    props.successfulPayment();
    
  };

if(paymentStatus===false){
  return (
    <div>
      <div id="paymentHead">
        <img src={amazon} />
        <h2>Payment</h2>
        <Link to="/restaurants">
          <button id="cancelPayment">Cancel Payment</button>
        </Link>
      </div>
      <div id="paymentBody">
        <form id="formPayment">
          <div>
            <label>Enter Card number</label>
            <input id="inpCardNum" />
          </div>
          <div>
            <label>Enter CVV</label>
            <input id="inpCVV" />
          </div>
          <div>
            <label>Enter Expiry Date</label>
            <input id="inpExpiry" />
          </div>
          <div>
            <label>Enter OTP</label>
            <input id="inpOTP" />
          </div>
          <div>
            <label>Amount</label>
            <input value={"₹" + props.subtotal} disabled id="inpAmount" />
          </div>
        </form>
        <button id="btnConfirmOrder" onClick={confirmOrder}>
          Confirm Order
        </button>
      </div>
    </div>
  );
    }
    else{
  return (
    <div>
    <div id="paymentHead">
      <img src={amazon} />
      <h2>Payment</h2>
      <Link to="/restaurants">
        <button id="cancelPayment">Cancel Payment</button>
      </Link>
    </div>
    <div id="paymentBody">
      <p className="successfull">Payment made successfully !!!!</p>
      </div>
    </div>
  );
    }
}

export default Payment;
