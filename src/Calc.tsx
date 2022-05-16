import { useState } from 'react';
import { Box, SimpleGrid, Input, Button } from '@chakra-ui/react';

function Calculadora() {
  const [visor, setVisor] = useState('');

  const despliegueEnVisor = (e: any) =>
    setVisor(visor + e.target.value.toString());

  const resultado = () => setVisor(eval(visor));

  const limpiarVisor = () => setVisor('');

  return (
    <Box maxW="780px" my="0" mx="auto">
      <Input value={visor} onChange={despliegueEnVisor} type="text" readOnly />
      <SimpleGrid columns={4} spacing={1}>
        <Button value="C" colorScheme="blackAlpha" onClick={limpiarVisor}>
          C
        </Button>
        <Button value="(" colorScheme="blackAlpha" onClick={despliegueEnVisor}>
          (
        </Button>
        <Button value=")" colorScheme="blackAlpha" onClick={despliegueEnVisor}>
          )
        </Button>
        <Button value="/" colorScheme="blackAlpha" onClick={despliegueEnVisor}>
          /
        </Button>
        <Button value="7" onClick={despliegueEnVisor}>
          7
        </Button>{' '}
        <Button value="8" onClick={despliegueEnVisor}>
          8
        </Button>{' '}
        <Button value="9" onClick={despliegueEnVisor}>
          9
        </Button>{' '}
        <Button value="*" colorScheme="blackAlpha" onClick={despliegueEnVisor}>
          *
        </Button>
        <Button value="4" onClick={despliegueEnVisor}>
          4
        </Button>{' '}
        <Button value="5" onClick={despliegueEnVisor}>
          5
        </Button>{' '}
        <Button value="6" onClick={despliegueEnVisor}>
          6
        </Button>{' '}
        <Button value="-" colorScheme="blackAlpha" onClick={despliegueEnVisor}>
          -
        </Button>{' '}
        <Button value="1" onClick={despliegueEnVisor}>
          1
        </Button>
        <Button value="2" onClick={despliegueEnVisor}>
          2
        </Button>{' '}
        <Button value="3" onClick={despliegueEnVisor}>
          3
        </Button>{' '}
        <Button value="+" colorScheme="blackAlpha" onClick={despliegueEnVisor}>
          +
        </Button>{' '}
        <Button value="." onClick={despliegueEnVisor}>
          .
        </Button>
        <Button value="0" onClick={despliegueEnVisor}>
          0
        </Button>{' '}
        <Button value="**" onClick={despliegueEnVisor}>
          Exp
        </Button>
        <Button value="=" colorScheme="whatsapp" onClick={resultado}>
          =
        </Button>
      </SimpleGrid>
    </Box>
  );
}

export default Calculadora;
