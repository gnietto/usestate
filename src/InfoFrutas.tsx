import { Image, Flex, Text } from '@chakra-ui/react';

export default function InfoFrutas(props: any) {
  return (
    <Flex
      w={props.anchoBox}
      h={props.altoBox}
      bgImage={props.bgImage}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="md">{props.nombreFruta}</Text>
      <Text fontSize="md">{props.precioPorKilo}</Text>
      <Image
        src={props.imgInterna}
        w={props.anchoImgInterna}
        zIndex={props.zIndex}
        m={props.margin}
      />
    </Flex>
  );
}
