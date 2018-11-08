import React from 'react';

export const LabelledInput = (props) => {

  const inputChange = (e) => {
    const obj = {};
    obj[e.target.name] = e.target.value;
    props.userInput(obj);
  }

  return (
    <label>
      { props.label }
      <input name={props.name} placeholder={props.placeholder} onChange={inputChange}/>
    </label>
  )
}

export const LabelledCheckbox = (props) => {

  const checkboxChange = (e) => {
    const obj = {};
    obj[e.target.name] = e.target.checked;
    props.userInput(obj);

  }

  return (
    <label>
      { props.label }
      <input name={props.name} type="checkbox" onChange={checkboxChange}/>
    </label>
  )
}

export const LabelledTextarea = (props) => {

  const inputChange = (e) => {
    const obj = {};
    obj[e.target.name] = e.target.value;
    props.userInput(obj);
  }

  return(
    <label>
      { props.label }
      <textarea name={props.name} placeholder={props.placeholder} onChange={inputChange}/>
    </label>
  )
}
