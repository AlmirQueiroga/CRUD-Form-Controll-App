import styled from "styled-components";
import { RadioGroup, TextField } from "@mui/material";

const GenderCheckbox = styled(RadioGroup)`
  font-size: small;
  color: black;
`

const TextInput = styled(TextField)`
  width: 260px;
  color: white;
`

const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex: 1
`

export{GenderCheckbox,TextInput, Form}