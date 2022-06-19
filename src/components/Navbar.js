import React from "react";

export default function Navbar() {
  return (
    <nav className="nav heading-font">
      <ul className="list">
        <li>
          <a href="/RSVP">R.S.V.P</a>
        </li>
        <li className="fullscreen">~</li>
        <li>
          <a href="/address-information">Address & Info</a>
        </li>
        <li className="fullscreen">~</li>
        <li>
          <a href="/music-requests">Music Requests</a>
        </li>
        <li className="fullscreen">~</li>
        <li>
          <a href="/food-drink">Food & Drink</a>
        </li>
        <li className="fullscreen">~</li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li className="fullscreen">~</li>
        <li>
          <a href="/faq">F.A.Q</a>
        </li>
      </ul>
    </nav>
  );
}
