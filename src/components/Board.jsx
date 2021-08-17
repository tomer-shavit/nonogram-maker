import { Flex, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { BoardContext } from '../BoardContext';
import { Cell } from './Cell';

export const Board = () => {
  const { board } = useContext(BoardContext);

  return (
    <Flex height="100%" alignItems="center" justifyContent="center">
      <VStack spacing={0}>
        {board.map((row, i) => (
          <Flex key={i}>
            {row.map((col, j) => (
              <Cell key={j} row={i} col={j}></Cell>
            ))}
          </Flex>
        ))}
      </VStack>
      <Flex height="60px" width="1px"></Flex>
    </Flex>
  );
};
