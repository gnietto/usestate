// import React from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Frases from './Frases';
import Previewer from './Previewer';
import Calc from './Calc';
import FrutaKids from './FrutaKids';

function App() {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Frases Célebres</Tab>
          <Tab>Calculadora</Tab>
          <Tab>Markdown</Tab>
          <Tab>FrutaKids</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Frases />
          </TabPanel>
          <TabPanel>
            <Calc />
          </TabPanel>
          <TabPanel>
            <Previewer />
          </TabPanel>
          <TabPanel>
            <FrutaKids />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
