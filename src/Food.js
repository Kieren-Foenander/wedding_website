import React from "react";

export default function Food() {
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
            <li>BBQ Meat Lovers</li>
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
                <div>
                  <input
                    type="checkbox"
                    id="beer"
                    name="beer"
                    value="beer"
                  ></input>
                  <label>Beer</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="White-Wine"
                    name="White-Wine"
                    value="White-Wine"
                  ></input>
                  <label>White Wine</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Red-Wine"
                    name="Red-Wine"
                    value="Red-Wine"
                  ></input>
                  <label>Red Wine</label>
                </div>
              </div>
              <div className="child">
                <div>
                  <input
                    type="checkbox"
                    id="Smirnoff-Vodka"
                    name="Smirnoff-Vodka"
                    value="Smirnoff-Vodka"
                  ></input>
                  <label>Smirnoff Vodka</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    id="Jack-Daniels"
                    name="Jack-Daniels"
                    value="Jack-Daniels"
                  ></input>
                  <label>Jack Daniels</label>
                </div>
              </div>
            </div>
            <div className="full-child">
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
