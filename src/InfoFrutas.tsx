import { Box, Image } from '@chakra-ui/react';

export default function InfoFrutas(props: any) {
  return (
    <Box w={props.anchoBox} h={props.altoBox} bgImage={props.bgImage}>
      <Image
        src={props.imginterna}
        w={props.anchoImgInterna}
        zIndex={props.zIndex}
        m={props.margin}
      />
    </Box>
  );
}
