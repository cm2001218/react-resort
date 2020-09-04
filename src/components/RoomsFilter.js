import React, { useContext } from "react";

import { RoomContext } from "../context";
import Title from "./Title";

//get unique value
const getUnique = (items, value) => {
  // return [...new Set(items.map((item) => item[value]))];
  let tempTypes = items.map((item) => item[value]);
  let arr = [tempTypes[0]];
  for (let i = 1; i < tempTypes.length; i++) {
    let result = arr.find((item) => item === tempTypes[i]);
    if (!result) {
      arr.push(tempTypes[i]);
    }
  }
  return arr;
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];

  let capacities = getUnique(rooms, "capacity");

  return (
    <>
      <section className="filter-container">
        <Title title="search rooms"></Title>
        <form className="filter-form">
          <div className="form-group">
            <label htmlFor="type">room type</label>
            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="capacity">room capacity</label>
            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
              {capacities.map((capacity, index) => (
                <option key={index} value={capacity}>
                  {capacity}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="price">room price ${price}</label>
            <input type="range" name="price" value={price} min={minPrice} max={maxPrice} onChange={handleChange} className="form-control"></input>
          </div>
          <div className="form-group">
            <label htmlFor="size">room size</label>
            <input name="minSize" type="number" value={minSize} min="0" onChange={handleChange} className="size-input" />
            <input name="maxSize" type="number" value={maxSize} max="1000" onChange={handleChange} className="size-input" />
          </div>
          <div className="form-group">
            <div className="single-extra">
              <label htmlFor="breakfast">breakfast</label>
              <input id="breakfast" name="breakfast" type="checkbox" checked={breakfast} onChange={handleChange} />
            </div>
            <div className="single-extra">
              <label htmlFor="pets">pets</label>
              <input id="pets" name="pets" type="checkbox" checked={pets} onChange={handleChange} />
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
