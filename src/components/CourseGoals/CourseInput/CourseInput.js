import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const InputControl = styled.div`
  margin: 0.5rem 0;
  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }
  input {
    display: block;
    width: 100%;
    border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
    background: ${props => props.invalid ? 'rgb(219, 139, 146)' : 'transparent'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    &:focus {
      outline: none;
      background: #fad0ec;
      border-color: #8b005d;
    }
  }
  /* &.invalid {
    input {
      border-color: red;
      background: rgb(219, 139, 146);
    } */
    label {
      color: ${props => props.invalid ? 'red' : 'black'};
    } 
`

export const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsvalid] = useState(true);
  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsvalid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsvalid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>

      {/** using CSS Modules, change xx.css file to be xx.module.css, then import styles from './CourseInput.module.css'
      *<div className={styles.button}> 
      *<div className={`${styles['form-control]} ${!isValid&&styles.invalid}` } > */}

      {/** using customized css with flexible styles
       *<InputControl className={`form-control ${!isValid ? 'invalid' : ''}`}> */}

      {/**using styled-components styles */}
      <InputControl invalid={!isValid}>
        <label>Daily Goals</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </InputControl>
      <Button type="submit">Add A Goal</Button>
    </form>
  );
};