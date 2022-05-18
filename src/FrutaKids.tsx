import { Box, Flex, Spacer } from '@chakra-ui/react';
import { shuffle } from 'd3-array';
import FrutasAleatorias from './FrutasAleatorias';
import InfoFrutas from './InfoFrutas';
import Cajon from './Cajon';
import EvaluarRespuesta from './EvaluarRespuesta';
import cajonFrutas from './principal/cajonfrutas.png';
import mayorQue from './principal/mayor_que.svg';
import incognita from './principal/incognita.svg';
import cuadro_info from './principal/cuadro_info.svg';
import imgplatano from './frutas/Platano.svg';
import imgsandia from './frutas/Sandia.svg';
import imguva from './frutas/Uva.svg';
import imgnaranja from './frutas/Naranja.svg';
import imgdurazno from './frutas/Durazno.svg';
import imgdamasco from './frutas/Damasco.svg';
import imgframbuesa from './frutas/Frambuesa.svg';
import imgfrutilla from './frutas/Frutilla.svg';
import imgmanzana from './frutas/Manzana.svg';
import imgpera from './frutas/Pera.svg';
import revisarInactivo from './botones/revisar_inactivo.svg';

export default function FrutaKids() {
  const imgfrutas = [
    {
      fruta: 'damasco',
      imagen: imgdamasco,
      precio: 800,
      unidad: 'el kilo'
    },
    {
      fruta: 'durazno',
      imagen: imgdurazno,
      precio: 650,
      unidad: 'el kilo'
    },
    {
      fruta: 'frambuesa',
      imagen: imgframbuesa,
      precio: 2500,
      unidad: 'el kilo'
    },
    {
      fruta: 'frutilla',
      imagen: imgfrutilla,
      precio: 1500,
      unidad: 'el kilo'
    },
    {
      fruta: 'manzana',
      imagen: imgmanzana,
      precio: 450,
      unidad: 'el kilo'
    },
    {
      fruta: 'naranja',
      imagen: imgnaranja,
      precio: 530,
      unidad: 'el kilo'
    },
    {
      fruta: 'pera',
      imagen: imgpera,
      precio: 430,
      unidad: 'el kilo'
    },
    {
      fruta: 'platano',
      imagen: imgplatano,
      precio: 600,
      unidad: 'el kilo'
    },
    {
      fruta: 'sandia',
      imagen: imgsandia,
      precio: 1000,
      unidad: 'la unidad'
    },
    {
      fruta: 'uva',
      imagen: imguva,
      precio: 1800,
      unidad: 'el kilo'
    }
  ];

  const aleatorizarArray = shuffle(imgfrutas);

  return (
    <Box>
      <Flex alignItems="center" mx="5vw">
        <FrutasAleatorias
          fruta1={aleatorizarArray[0]['imagen']}
          fruta2={aleatorizarArray[5]['imagen']}
          fruta3={aleatorizarArray[9]['imagen']}
          anchoFrutas="12vw"
        />
        <Spacer />
        <InfoFrutas
          imginterna={incognita}
          anchoImgInterna="12vw"
          anchoBox="22vw"
          altoBox="22vw"
          bgImage={cuadro_info}
        />
      </Flex>
      <Flex alignItems="center" gap="1vw">
        <Cajon img={cajonFrutas} />
        <Cajon img={mayorQue} anchoImg="10vw" />
        <Cajon img={cajonFrutas} />
        <Cajon img={mayorQue} anchoImg="10vw" />
        <Cajon img={cajonFrutas} />
      </Flex>
      <EvaluarRespuesta img={revisarInactivo} texto="" anchoImg="15vw" />
    </Box>
  );
}
