import { Box, Image } from '@chakra-ui/react';

export default function Cajon(props: any) {
  return (
    <Box>
      <Image src={props.img} w={props.anchoImg} />
    </Box>
  );
}
