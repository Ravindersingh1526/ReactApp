import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Payment } from "./modules/payment/payment";
import { Chat } from "./modules/chat/chat";

function App() {
  return (
    <div>
      <h1>EST</h1>T
      <Routes>
        <Route path="/payment" element={<Payment/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </div>
  );
}

export default App;
