import React, { useState } from "react";
import { db } from './firebase-config'
import { addDoc, collection } from "firebase/firestore";

export default function Music() {

  const [song, setSong] = useState("")

  const songsCollectionRef = collection(db, "songs")

  const submitSong = async () => {
    await addDoc(songsCollectionRef, {name: song})
  }


  return (
    <>
      <div className="container">
        <h2>Song Requests</h2>
      </div>
      <div className="container">
        <p>
          We created a playlist with our favourite funky tunes that will make
          you say “Come on Eileen”, “I wanna dance with somebody” as the “Music
          makes you lose control”, so please add any songs you think will “Pump
          up the jam”
        </p>
        <form className="song-form">
          <input
            type="search"
            placeholder="Song Name"
            value={song}
            onChange={e =>{setSong(e.target.value)}}
          ></input>
          <button type="submit" onClick={submitSong}>Submit Request</button>
        </form>
      </div>
    </>
  );
}
