import React, {
  HTMLInputTypeAttribute,
  useEffect,
  useRef,
  useState,
} from "react";
import {InputGroup, Input, Label} from "./styles.js";

const TextField = () => {
  const [state, setState] = useState<{ text: string; text2: string }>({
    text: '',
    text2: ''
  });
  const handelChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [evt.target.name]: evt.target.value
    })
  }
  return (
    <InputGroup>
      <Input
        type="text"
        id="input_1"
        name="text2"
        value={state.text2}
        onChange={handelChange}
        placeholder={' '}
        className={'form__input'}
        autoComplete={'off'}
      />
      <Label htmlFor="input_1" className={'form__label'}>Outlined</Label>
    </InputGroup>
  );
};

export default TextField;
