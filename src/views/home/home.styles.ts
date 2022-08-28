import styled from "styled-components";
import BackgroundImage from "../../assets/background.jpg"
import { Card } from "@mui/material";

const Background = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackgroundCard = styled(Card)`
  padding:25px;
  width: 550px;;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff !important;
  flex-direction: column;
`

export{Background, BackgroundCard}