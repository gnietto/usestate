import { Image, Flex } from '@chakra-ui/react';

export default function InfoFrutas(props: any) {
  return (
    <Flex w={props.anchoBox} h={props.altoBox} bgImage={props.bgImage} justifyContent="center" alignItems="center">
      <Image
        src={props.imginterna}
        w={props.anchoImgInterna}
        zIndex={props.zIndex}
        m={props.margin}
      />
    </Flex>
  );
}
