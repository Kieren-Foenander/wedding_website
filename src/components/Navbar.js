import React, { useState } from "react"
import menu from  "../Images/menu.png"
import { Link } from "react-router-dom"


export default function Navbar() {

const [show, setShow] = useState(false)

  return (
    <nav className="nav" style={{background: show ? "rgba(255, 255, 255, .75)" : "none"}}>
      <img src={menu} alt ="menu" className="menu" onClick={() => setShow((s) => !s)}/>
      <ul className="list" style={{display: show ? "inline" : "none"}}>
        <li>
          <Link to="/rsvp" onClick={() => setShow((s) => !s)}>R.S.V.P</Link>
        </li>
        <li>
          <Link to="/info" onClick={() => setShow((s) => !s)}>Address & Info</Link>
        </li>
        <li>
          <Link to="/music" onClick={() => setShow((s) => !s)}>Music Requests</Link>
        </li>
        <li>
          <Link to="/food" onClick={() => setShow((s) => !s)}>Food & Drink</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setShow((s) => !s)}>Gallery</Link>
        </li>
        <li>
          <Link to="/questions" onClick={() => setShow((s) => !s)}>F.A.Q</Link>
        </li>
      </ul>
    </nav>
  );
}
