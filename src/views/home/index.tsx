import {  Box, Tab } from "@mui/material";
import React from "react";
import CadastroForm from "../../components/CadastroForm/CadastroForm";
import { Background, BackgroundCard } from "./home.styles";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Lista from "../../components/Lista/Lista";
import { Provider } from "react-redux";
import { store } from "../../store";

export default function Home(): JSX.Element{

  const [tabs, setTabs] = React.useState(1)

	return(
    <Provider store={store}>
      <Background>
        <BackgroundCard list={tabs === 2}>
          <TabContext value={tabs.toString()}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList aria-label="navgation-tabs">
                <Tab label="Cadastro" value="1" onClick={() => setTabs(1)}/>
                <Tab label="Lista" value="2" onClick={() => setTabs(2)}/>
              </TabList>
            </Box>
            <TabPanel value="1"><CadastroForm onFinish={() => setTabs(2)} /></TabPanel>
            <TabPanel value="2"><Lista onEdit={() => setTabs(1)}/></TabPanel>
          </TabContext>
          <br/>
        </BackgroundCard>       
      </Background>
    </Provider>
	)
}