import React from 'react';

const selectionChange = (props, e) => {
  const obj = {};
  obj[e.target.name] = e.target.value;
  props.userInput(obj);
}

export const CategorySelection = (props) => {

  return(
    <label>
      Choose category:
      <select onChange={(e) => this.selectionChange(props, e)} name={props.name}>
        <option defaultValue value="">Other Category</option>
        <option value="beer">Beer</option>
        <option value="wine">Wine</option>
        <option value="other_drink">Other Drinks</option>
        <option value="food">Food</option>
        <option value="clothes">Clothes</option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
        <option value="art">Art</option>
        <option value="every_day">Every Day Items</option>
      </select>
    </label>
   )
  }

export const CurrencySelection = (props) => {

  return (
    <label>
      Choose currency:
      <select onChange={(e) => this.selectionChange(props, e)} name={props.name}>
        <option defaultValue value="GBP">£ GBP</option>
        <option value="EUR">€ EUR</option>
        <option value="USD">$ USD</option>
      </select>
    </label>
  )
}
