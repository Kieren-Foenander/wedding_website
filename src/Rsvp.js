import React, { useState, useEffect } from 'react'
import { db } from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'


export default function Rsvp() {

  const [guests, setGuests] = useState([])

  useEffect( () => {
    const guestsCollectionRef = collection(db, "guests")
    const getGuests = async () => {
      const data = await getDocs(guestsCollectionRef)
      setGuests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getGuests()
  }, [])

  return (
    <div>
      {guests.map((guests) =>{
        return(
          <div key={guests.id}> 
            <h1 >Name: {guests.name}</h1>
            <h1>RSVP: {guests.rsvp.toString()}</h1>
          </div>
        )
      })}
    </div>
  )
}
