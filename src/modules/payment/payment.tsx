import axios from "axios";
import React from "react";
import { RAZORPAY_KEY_ID } from "../../constants/constants";

export const Payment: React.FC = () => {
  const loadScript = (src: string) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePay = async () => {
    const payamount =100;
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:5000/razorpay/orders",{amount: payamount});
    
     console.log(result);
     const { id, amount  } = result.data.order;

    const options = {
      key: RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      amount: amount,
      currency: "INR",
      name: "Ravinder Singh",
      description: "Test Transaction",
      order_id: result,
      handler: async function (response: any) {
        const data = {
          orderCreationId: id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
      },
      prefill: {
        name: "Ravinder Singh",
        email: "ravindersingh1526@gmail.com",
        contact: "+98149-56722",
      },
    };
    //@ts-ignore
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <h1>PAY: 100</h1>
      <button onClick={handlePay}>Pay Now</button>
    </>
  );
};
