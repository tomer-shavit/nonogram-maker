import { Flex, Code } from '@chakra-ui/react';
import { useContext } from 'react';
import { BoardContext } from '../BoardContext';

export const CodeSection = () => {
  const { constraints } = useContext(BoardContext);
  return (
    <Flex justifyContent="center" alignItems="center" width="80%">
      <Code color="#141414" textAlign="center">
        {JSON.stringify(constraints)}
      </Code>
    </Flex>
  );
};
