import React, { useState } from "react";
import menu from  "../Images/menu.png"


export default function Navbar() {

const [show, setShow] = useState(false)

  return (
    <nav className="nav">
      <img src={menu} alt ="menu" className="menu" onClick={() => setShow((s) => !s)}/>
      <ul className="list" style={{display: show ? "inline" : "none"}}>
        <li>
          <a href="/RSVP">R.S.V.P</a>
        </li>
        <li>
          <a href="/address-information">Address & Info</a>
        </li>
        <li>
          <a href="/music-requests">Music Requests</a>
        </li>
        <li>
          <a href="/food-drink">Food & Drink</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/faq">F.A.Q</a>
        </li>
      </ul>
    </nav>
  );
}
