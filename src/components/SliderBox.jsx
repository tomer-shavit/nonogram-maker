import { Flex, Text } from '@chakra-ui/react';
import { MySlider } from './MySlider';

export const SliderBox = ({ type, value, setValue }) => {
  return (
    <Flex flexDir="column" p={2} width="30%">
      <Flex flexDir="row" marginBottom={2}>
        <Text color="#141414" marginRight={2}>
          {type}:
        </Text>
        <Text color="#141414">{value}</Text>
      </Flex>
      <MySlider setValue={setValue} intiValue={value}></MySlider>
    </Flex>
  );
};
