import { Box, Flex, Spacer } from '@chakra-ui/react';
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
    imgplatano,
    imgsandia,
    imguva,
    imgnaranja,
    imgdurazno,
    imgdamasco,
    imgframbuesa,
    imgfrutilla,
    imgmanzana,
    imgpera
  ];

  const numeroAleatorio = Math.floor(Math.random() * imgfrutas.length);

  return (
    <Box>
      <Flex alignItems="center" mx="5vw">
        <FrutasAleatorias
          fruta1={imgplatano}
          fruta2={imgsandia}
          fruta3={imguva}
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
      <Flex alignItems="center" gap="1vw" >
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
