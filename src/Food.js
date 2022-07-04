import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase-config";

export default function Food() {
  const [drinks, setDrinks] = useState([])

  const drinksCollectionRef = collection(db, "drinks")

  const submitDrinks = async () =>{
    console.log("drinks started")
    await addDoc(drinksCollectionRef, {drinks: drinks})
    setDrinks([])
    console.log("drinks added")
    window.location.reload()
  }

  function combineDrinks(newDrink, checked){
    let drinksArr = drinks
    if(checked === false){
      for (let i = 0; i< drinksArr.length; i++){
        if(drinksArr[i] === newDrink){
          drinksArr.splice(i, 1)
        }
      }
    }else{
      drinksArr.push(newDrink)  
    }
    setDrinks(drinksArr)
    console.log(drinksArr)
  }


  return (
    <div>
      <div className="container">
        <h2>Food & Drink</h2>
      </div>
      <div className="container">
        <h3>Alfresco Woodfire Pizza</h3>
        <p>
          We will be having woodfire pizza to fire up your cheesy dance moves,
          see the Pizza's available below
        </p>
        <div className="split">
          <ul className="child">
            <li>Garlic Pizza</li>
            <li>Classic Pesto</li>
            <li>Margherita</li>
            <li>Vegetarian</li>
            <li>Supreme</li>
            <li>Pepperoni</li>
            <li>BBQ Meatlovers</li>
          </ul>
          <ul className="child">
            <li>Hawaiian</li>
            <li>Smoked salmon and fetta</li>
            <li>BBQ Chicken</li>
            <li>Pesto Chicken</li>
            <li>Neapolitan Pizza</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <h3>Drinks</h3>
        <p>
          To ensure we keep our fluids up and make sure there is more than
          enough for all, please select below which beveragino will bring out
          your killer dance moves!
        </p>
        <div className="">
          <form>
            <div className="split">
              <div className="child">
                <div className="drinks">
                  <input
                    type="checkbox"
                    id="beer"
                    name="beer"
                    value="beer"
                    onChange={(e)=>{
                      combineDrinks(e.target.value, e.target.checked)
                    }}
                  ></input>
                  <label>Beer</label>
                </div>
                <div className="drinks">
                  <input
                    type="checkbox"
                    id="White-Wine"
                    name="White-Wine"
                    value="White-Wine"
                    onChange={(e)=>{
                      combineDrinks(e.target.value, e.target.checked)
                    }}
                  ></input>
                  <label>White Wine</label>
                </div>
                <div className="drinks">
                  <input
                    type="checkbox"
                    id="Red-Wine"
                    name="Red-Wine"
                    value="Red-Wine"
                    onChange={(e)=>{
                      combineDrinks(e.target.value, e.target.checked)
                    }}
                  ></input>
                  <label>Red Wine</label>
                </div>
              </div>
              <div className="child">
                <div className="drinks">
                  <input
                    type="checkbox"
                    id="Smirnoff-Vodka"
                    name="Smirnoff-Vodka"
                    value="Smirnoff-Vodka"
                    onChange={(e)=>{
                      combineDrinks(e.target.value, e.target.checked)
                    }}
                  ></input>
                  <label>Vodka</label>
                </div>
                <div className="drinks">
                  <input
                    type="checkbox"
                    id="Jack-Daniels"
                    name="Jack-Daniels"
                    value="Jack-Daniels"
                    onChange={(e)=>{
                      combineDrinks(e.target.value, e.target.checked)
                    }}
                  ></input>
                  <label>Jack Daniels</label>
                </div>
              </div>
            </div>
            <div className="full-child">
              <button type="button" onClick={submitDrinks}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
