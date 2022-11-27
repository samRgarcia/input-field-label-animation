import styled from "styled-components";

export const InputGroup = styled.div`
  position: relative;
  width: 20rem;
  height: 2rem;
`;
export const Label = styled.label`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(40%);
  pointer-events: none;
  color: #737373;
  transition: all 0.3s ease-out;
  background: #242424;
  padding: 0px 4px;
`;
export const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #9e9e9e;
  border-radius: 10px;
  font-family: inherit;
  font-size: inherit;
  color: white;
  outline: none;
  padding: 1.25rem;
  background: none;

  /*&:focus {
    outline: none;
    border: 1.5px solid #1a73e8;
  }*/

  &:hover {
    border-color: #1a73e8;
  }

  &:hover ~ label {
    color: #1a73e8;
  }


  /* Change border when input focus*/

  &:focus {
    outline: 0;
    border-width: 2px;
  }

  &:focus ~ label {
    margin-top: -38px;
    color: #1a73e8;
  }

  &:not([value=""]) {
    border-width: 2px;
    color: white;
  }

  &:not([value=""]) ~ label {
    margin-top: -38px;
    color: white;
  }

  /*&:valid ~ label {
    position: absolute;
    z-index: 1;
    padding: 0px 8px;
    border-radius: 5px;
    border-bottom: 1px solid #242424;
    background: #242424;
    transform: translate(0rem, -0.8rem) scale(0.8);
  }*/
`;


