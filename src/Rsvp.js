/* eslint-disable */
import React, { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";

export default function Rsvp() {
  function useGuests() {
    const [guests, setGuests] = useState([]);

    const guestsCollectionRef = collection(db, "guests");

    useEffect(() => {
      onSnapshot(guestsCollectionRef, (snapshot) => {
        const newGuests = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGuests(newGuests);
        console.log("running");
      });
    }, []);
    //sort alphabetically
    guests.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));

    return guests;
  }

  const guests = useGuests();

  const updateRsvp = async (id, rsvp) => {
    const Guestdocument = doc(db, "guests", id);
    const updatedRsvp = { rsvp: !rsvp };
    await updateDoc(Guestdocument, updatedRsvp);
  };

  return (
    <>
      <div className="container">
        <h2>RSVP</h2>
      </div>
      <div className="container">
        <p>
          Find your name below and tick next to it to let us know if you will be
          attending our special day
        </p>
        <div className="guest-list">
          {guests.map((guests) => {
            return (
              <div key={guests.id} className="names">
                <input
                  className="checkbox"
                  type="checkbox"
                  checked={guests.rsvp}
                  onChange={(e) => updateRsvp(guests.id, guests.rsvp)}
                ></input>
                <label>{guests.name}</label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
