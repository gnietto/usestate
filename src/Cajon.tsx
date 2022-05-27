import { Box, Image } from '@chakra-ui/react';
import { useDrop } from 'react-dnd';
import { dndTypes } from './dndTypes';

export default function Cajon(props: any) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: dndTypes.FRUTA,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  }));

  return (
    <Box ref={drop}>
      <Image src={props.img} w={props.anchoImg}  />
    </Box>
  );
}
