import { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

function Calculadora() {
  const [visor, setVisor] = useState('');
  const despliegueEnVisor = (e: any) =>
    setVisor(visor + e.target.value.toString());
  const resultado = () => setVisor(eval(visor));
  const limpiarVisor = () => setVisor('');

  return (
    <Box>
      <Input value={visor} onChange={despliegueEnVisor} type="text" readOnly />
      <Button value="1" onClick={despliegueEnVisor}>
        1
      </Button>
      <Button value="2" onClick={despliegueEnVisor}>
        2
      </Button>
      <Button value="+" onClick={despliegueEnVisor}>
        +
      </Button>
      <Button value="=" onClick={resultado}>
        =
      </Button>
      <Button value="C" onClick={limpiarVisor}>
        {' '}
        C{' '}
      </Button>
    </Box>
  );
}

export default Calculadora;
