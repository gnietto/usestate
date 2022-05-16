// import React from 'react';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Frases from './Frases';
import Previewer from './Previewer';
import Calc from './Calc';

function App() {
  return (
    <Box>
      <Tabs>
        <TabList>
          <Tab>Frases Célebres</Tab>
          <Tab>Calculadora</Tab>
          <Tab>Markdown</Tab>
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
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default App;
