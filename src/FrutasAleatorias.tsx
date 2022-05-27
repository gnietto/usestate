import { Box, Flex, Image } from '@chakra-ui/react';
import { useDrag } from 'react-dnd';
import { dndTypes } from './dndTypes';

export default function FrutasAleatorias(props: any) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dndTypes.FRUTA,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <Box>
      <Flex>
        <Image
          src={props.fruta1}
          w={props.anchoFrutas}
          onClick={props.onClick}
          data-indexfruta={props.dataIndexFruta1}
          ref={drag}
        />
        <Image
          src={props.fruta2}
          w={props.anchoFrutas}
          onClick={props.onClick}
          data-indexfruta={props.dataIndexFruta2}
          ref={drag}
        />
      </Flex>
      <Flex justifyContent="center">
        <Image
          src={props.fruta3}
          w={props.anchoFrutas}
          onClick={props.onClick}
          data-indexfruta={props.dataIndexFruta3}
          ref={drag}
        />
      </Flex>
    </Box>
  );
}
