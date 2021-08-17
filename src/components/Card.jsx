import { Flex, Heading, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { BoardContext } from '../BoardContext';
import { Board } from './Board';
import { CodeSection } from './CodeSection';
import { SliderBox } from './SliderBox';

export const Card = () => {
  const { length, height, setHeight, setLength } = useContext(BoardContext);

  return (
    <VStack
      spacing={4}
      justifyContent="center"
      width="80%"
      borderRadius="20px"
      background="#f5f5f5"
      p={8}
      margin={4}
    >
      <Heading color="#222222">Nonogram Maker 5000</Heading>
      <Flex justifyContent="space-between" p={2} width="60%">
        <SliderBox
          type="Height"
          value={height}
          setValue={setHeight}
        ></SliderBox>
        <SliderBox
          type="Length"
          value={length}
          setValue={setLength}
        ></SliderBox>
      </Flex>
      <Board></Board>
      <CodeSection></CodeSection>
    </VStack>
  );
};
