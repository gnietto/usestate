import { Box, Flex, Image } from '@chakra-ui/react';

export default function FrutasAleatorias(props: any) {
  return (
    <Box>
      <Flex>
        <Image
          src={props.fruta1}
          w={props.anchoFrutas}
          onClick={props.onClick}
          data-indexfruta={props.dataIndexFruta1}
        />
        <Image
          src={props.fruta2}
          w={props.anchoFrutas}
          onClick={props.onClick}
          data-indexfruta={props.dataIndexFruta2}
        />
      </Flex>
      <Flex justifyContent="center">
        <Image
          src={props.fruta3}
          w={props.anchoFrutas}
          onClick={props.onClick}
          data-indexfruta={props.dataIndexFruta3}
        />
      </Flex>
    </Box>
  );
}
