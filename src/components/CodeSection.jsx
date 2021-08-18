import { Flex, Code } from '@chakra-ui/react';
import { useContext } from 'react';
import React from 'react';
import { BoardContext } from '../BoardContext';

export const CodeSection = React.memo(() => {
  const { finalConstraints } = useContext(BoardContext);

  return (
    <Flex justifyContent="center" alignItems="center" width="80%">
      <Code color="#141414" textAlign="center">
        {JSON.stringify(finalConstraints)}
      </Code>
    </Flex>
  );
});
