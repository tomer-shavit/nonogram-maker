import { createContext, useEffect, useState } from 'react';
const INIT_VALUE = 5;

export const BoardContext = createContext();

const initConstraints = amount => {
  const constraints = [];
  for (let i = 0; i < amount; i++) {
    constraints.push([]);
  }
  return constraints;
};

const makeBoard = (length, height) => {
  const board = [];
  for (let i = 0; i < height; i++) {
    board.push([]);
    for (let j = 0; j < length; j++) {
      board[i].push(-1);
    }
  }
  return board;
};

export const BoardProvider = ({ children }) => {
  const [length, setLength] = useState(INIT_VALUE);
  const [height, setHeight] = useState(INIT_VALUE);
  const [constraintsX, setConstraintsX] = useState(initConstraints(length));
  const [constraintsY, setConstraintsY] = useState(initConstraints(height));
  const [constraints, setConstraints] = useState([constraintsY, constraintsX]);
  const [board, setBoard] = useState(makeBoard(length, height));

  useEffect(() => {}, [board]);

  useEffect(() => {
    setConstraintsX(changeConstraintsX(length));
  }, [length]);

  useEffect(() => {
    setConstraintsY(changeConstraintsY(height));
  }, [height]);

  useEffect(() => {
    setBoard(editBoardX(length));
    console.log(board);
  }, [length]);

  useEffect(() => {
    setBoard(editBoardY(height));
  }, [height]);

  useEffect(() => {
    setConstraints([constraintsY, constraintsX]);
  }, [constraintsX, constraintsY]);

  const changeConstraintsY = len => {
    if (len < constraintsY.length) {
      return constraintsY.slice(0, len);
    } else {
      let extra = [];
      const constraints = constraintsY.map(row => row.slice());
      for (let i = constraintsY.length; i < len; i++) {
        constraints.push(extra);
      }
      return constraints;
    }
  };

  const changeConstraintsX = len => {
    if (len < constraintsX.length) {
      return constraintsX.slice(0, len);
    } else {
      let extra = [];
      const constraints = constraintsX.map(row => row.slice());
      for (let i = constraintsX.length; i < len; i++) {
        constraints.push(extra);
      }
      return constraints;
    }
  };

  const editBoardX = len => {
    let newBoard = [];
    if (len > board[0].length) {
      var extra = Array.from({ length: len - board[0].length }, (x, i) => -1);
    }

    for (let i = 0; i < board.length; i++) {
      let newRow = board[i].slice(0, len);
      if (len > board[0].length) {
        newRow = newRow.concat(extra);
      }
      newBoard.push(newRow);
    }
    return newBoard;
  };

  const editBoardY = rows => {
    if (rows < board.length) {
      return board.slice(0, rows);
    } else {
      let extra = Array.from({ length: board[0].length }, (x, i) => -1);
      const newBoard = board.map(row => row.slice());
      for (let i = board.length; i < rows; i++) {
        newBoard.push(extra);
      }
      return newBoard;
    }
  };

  const editCell = (row, col, clicked) => {
    const newRow = board[row];
    newRow[col] = clicked ? 1 : 0;
    setBoard(board.map((row, i) => (i === row ? newRow : row)));
    const newConstY = checkRow(row);
    const newConstX = checkCol(col);
    setConstraintsY([
      ...constraintsY.slice(0, row),
      newConstY,
      ...constraintsY.slice(row + 1, 21),
    ]);
    setConstraintsX([
      ...constraintsX.slice(0, col),
      newConstX,
      ...constraintsX.slice(col + 1, 21),
    ]);
  };

  const resetBoard = () => {
    setConstraintsX(INIT_VALUE);
    setConstraintsY(INIT_VALUE);
    setBoard(makeBoard(length, height));
  };

  const isLastInRow = index => {
    if (index === board[0].length - 1) {
      return true;
    }
    return false;
  };

  const isLastInCol = index => {
    if (index === board.length - 1) {
      return true;
    }
    return false;
  };

  const checkRow = row => {
    let constraints = [];
    let block = 0;
    for (let i = 0; i < board[row].length; i++) {
      if (board[row][i] === 1) {
        if (isLastInRow(i)) {
          block += 1;
          constraints.push(block);
        } else if (board[row][i + 1] === 1) {
          block += 1;
        } else {
          block += 1;
          constraints.push(block);
          block = 0;
        }
      }
    }
    return constraints;
  };

  const checkCol = col => {
    let constraints = [];
    let block = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === 1) {
        if (isLastInCol(i)) {
          block += 1;
          constraints.push(block);
        } else if (board[i + 1][col] === 1) {
          block += 1;
        } else {
          block += 1;
          constraints.push(block);
          block = 0;
        }
      }
    }
    return constraints;
  };

  return (
    <BoardContext.Provider
      value={{
        length,
        setLength,
        height,
        setHeight,
        constraintsX,
        constraintsY,
        constraints,
        board,
        editCell,
        resetBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
