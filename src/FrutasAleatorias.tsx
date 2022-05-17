import { Box, Image } from '@chakra-ui/react';

export default function FrutasAleatorias(props: any) {
  return (
    <Box>
      <Image src={props.fruta1} w={props.anchoFrutas} />
      <Image src={props.fruta2} w={props.anchoFrutas} />
      <Image src={props.fruta3} w={props.anchoFrutas} />
    </Box>
  );
}
