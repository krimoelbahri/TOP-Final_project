import React, { useState } from "react";
import styled from "styled-components";
// TODO: split components later
const Form = styled.form`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid black;
`;
const FormDiv = styled.div`
  margin: 0 40px 6px;
  width: 75%;
`;
const InputDiv = styled.div`
  display: flex;
  font-size: 14px;
  position: relative;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: rgba(250, 250, 250, 1);
  border: ${(props) =>
    !props.divFocus ? "1px solid rgba(219, 219, 219, 1)" : "1px solid black"};
  border-radius: 3px;
  box-sizing: border-box;
  color: rgba(38, 38, 38, 1);
`;
const Label = styled.label`
  display: flex;
  height: 36px;
  flex: 1 0 0;
  padding: 0;
  position: relative;
  margin: 0;
  min-width: 0;
`;
const Input = styled.input`
  background: rgba(250, 250, 250, 1);
  border: 0;
  flex: 1 0 auto;
  margin: 0;
  outline: 0;
  overflow: hidden;
  padding: ${(props) => (props.animation ? "14px 0 2px 8px" : "9px 0 7px 8px")};
  font-size: ${(props) => (props.animation ? "12px" : "16px")};
  text-overflow: ellipsis;
`;
const Span = styled.span`
  color: rgba(142, 142, 142, 1);
  transform: ${(props) =>
    props.animation ? "scale(.83333) translateY(-10px)" : "none"};
  transition: transform ease-out 0.1s;
  transform-origin: left;
  font-family: sans-serif;
  font-size: 12px;
  height: 36px;
  left: 8px;
  line-height: 36px;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
  text-overflow: ellipsis;
`;

export default function LoginForm() {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState();
  return (
    <Form>
      <h1 className="logo">Fakegram</h1>
      <FormDiv>
        <InputDiv
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          divFocus={focus}
        >
          <Label>
            <Span animation={value ? true : false}>
              Phone number, email or username
            </Span>
            <Input
              animation={value ? true : false}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              value={value}
              aria-label="Phone number, email or username"
            />
          </Label>
        </InputDiv>
      </FormDiv>
    </Form>
  );
}
