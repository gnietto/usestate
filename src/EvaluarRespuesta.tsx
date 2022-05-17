import { Flex, Spacer, Text, Image } from '@chakra-ui/react';

export default function EvaluarRespuesta(props: any) {
  return (
    <Flex>
      <Text> {props.texto} </Text>
      <Spacer />
      <Image src={props.img} w={props.anchoImg} />
    </Flex>
  );
}
