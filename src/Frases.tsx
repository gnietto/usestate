import { useState } from 'react';
import { Box, Flex, Button, Link, Icon } from '@chakra-ui/react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import frasesCelebres from './frasesCelebres';

function Frases() {
  const numeroAleatorio = Math.floor(Math.random() * frasesCelebres.length);

  const [textos, setTextos] = useState({
    cita: frasesCelebres[4].texto,
    autor: frasesCelebres[4].autor
  });

  const proximaFrase = () =>
    setTextos({
      cita: frasesCelebres[numeroAleatorio].texto,
      autor: frasesCelebres[numeroAleatorio].autor
    });

  return (
    <Flex
      id="texto-box"
      bgColor="orange"
      color="white"
      h="40vh"
      maxW="780px"
      my="0"
      mx="auto"
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Box id="text" textAlign="center" mx="1%" fontSize="lg">
        {textos.cita}
      </Box>
      <Box id="autor" my="1rem">
        {textos.autor}
      </Box>

      <Flex id="buttons" justifyContent="center" alignItems="center" gap="4">
        <Link
          id="tweet-texto"
          href={`https://twitter.com/intent/tweet?text= ${textos.cita} ${textos.autor}`}
          target="_blank"
          rel="noopener noreferrer"
          title="Comparte esta frase en tu timeline de Twitter"
        >
          <Icon as={AiFillTwitterCircle} w={8} h={8} />
        </Link>
        <Button
          id="new-texto"
          onClick={proximaFrase}
          bgColor="teal.700"
          _hover={{ bgColor: 'green.500' }}
        >
          Próxima Frase
        </Button>
      </Flex>
    </Flex>
  );
}

export default Frases;
