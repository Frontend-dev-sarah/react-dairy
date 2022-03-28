import styled from 'styled-components';
// import styles from './Button.module.css';

const ButtonStyles = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #5b0e8f;
  color: white;
  background: #5b0e8f;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  @media (min-width: 768px) {
    width: auto;
  }
    &:focus {
    outline: none;
    }
    &:hover,
    &:active {
    background: #5b0e8f;
    border-color: #5b0e8f;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
    }
`;

const Button = props => {
  return (
    //  using CSS Modules, change xx.css file to be xx.module.css, then import styles from './CourseInput.module.css'
    // *<div className ={`${styles.button} ${props.className}`}> 
    <ButtonStyles type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </ButtonStyles>
  );
};

export default Button;
