import { ChakraProvider, Flex, Link, Text, theme } from '@chakra-ui/react';
import React from 'react';
import { Card } from './components/Card';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        minHeight="100vh"
        height="100%"
        background="linear-gradient(#4ECDC4 0%, #556270 100%)"
      >
        <Card></Card>
        <Flex fontSize="sm">
          <Text color="white" marginRight={1}>
            made by:
          </Text>
          <Link
            href="https://github.com/tomer-shavit"
            isExternal="true"
            color="#4ECCC3"
          >
            Tomer Shavit
          </Link>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
