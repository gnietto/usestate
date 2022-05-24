import { useState } from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import {
  imgfrutas,
  numeroAleatorio1,
  numeroAleatorio2,
  numeroAleatorio3
} from './imgfrutas';
import FrutasAleatorias from './FrutasAleatorias';
import InfoFrutas from './InfoFrutas';
import Cajon from './Cajon';
import EvaluarRespuesta from './EvaluarRespuesta';
import cajonFrutas from './principal/cajonfrutas.png';
import mayorQue from './principal/mayor_que.svg';
import incognita from './principal/incognita.svg';
import cuadroInfo from './principal/cuadro_info.svg';
import revisarInactivo from './botones/revisar_inactivo.svg';

// import enviarVerde from './botones/enviar_verde.svg';
// import enviarRojo from './botones/enviar_rojo.svg';
// import continuarRojo from './botones/continuar_rojo.svg';

export default function FrutaKids() {
  const [descripcionFruta, clickDescripcionFruta] = useState({
    imgInterna: incognita,
    nombreFruta: '',
    precioPorKilo: ''
  });

  const detalleFrutas = (e: any) => {
    clickDescripcionFruta({
      imgInterna: imgfrutas[e.target.dataset.indexfruta]['imagen'],
      nombreFruta: imgfrutas[e.target.dataset.indexfruta]['fruta'],
      precioPorKilo: `${imgfrutas[e.target.dataset.indexfruta]['precio']} ${
        imgfrutas[e.target.dataset.indexfruta]['unidad']
      }`
    });
  };

  return (
    <Box>
      <Flex alignItems="center" mx="5vw">
        <FrutasAleatorias
          fruta1={imgfrutas[numeroAleatorio1]['imagen']}
          fruta2={imgfrutas[numeroAleatorio2]['imagen']}
          fruta3={imgfrutas[numeroAleatorio3]['imagen']}
          dataIndexFruta1={numeroAleatorio1}
          dataIndexFruta2={numeroAleatorio2}
          dataIndexFruta3={numeroAleatorio3}
          onClick={detalleFrutas}
          anchoFrutas="12vw"
        />
        <Spacer />
        <InfoFrutas
          imgInterna={descripcionFruta['imgInterna']}
          nombreFruta={descripcionFruta['nombreFruta']}
          precioPorKilo={descripcionFruta['precioPorKilo']}
          anchoImgInterna="12vw"
          anchoBox="22vw"
          altoBox="22vw"
          bgImage={cuadroInfo}
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
