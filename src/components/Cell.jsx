import { Flex } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { BoardContext } from '../BoardContext';

export const Cell = ({ row, col }) => {
  const { editCell, setRow, setCol, setChange, change } =
    useContext(BoardContext);
  const [clicked, setClicked] = useState(false);
  const getClicked = () => {
    setRow(row);
    setCol(col);
    setChange(!change);
    editCell(row, col, !clicked);
    setClicked(!clicked);
  };
  return (
    <Flex
      width="1.5rem"
      height="1.5rem"
      background={clicked ? '#4ECCC3' : '#FFF'}
      borderColor="#ececec"
      borderWidth="1px"
      cursor="pointer"
      onClick={() => getClicked()}
    ></Flex>
  );
};
