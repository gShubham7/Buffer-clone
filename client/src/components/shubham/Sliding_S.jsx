import { Box, Container, Heading, VStack, Image, Flex } from "@chakra-ui/react";
import { data } from "./slidingData.js";
import React from "react";
import Ticker from "react-ticker";
import "./Sliding_S.css";

const Card = (props) => {
  const { id, avatar } = props;
  return (
    <Box>
      <VStack
        border="1px green solid"
        // h="350px"
        pt={100}
        pb={10}
        w="350px"
        pos="relative"
        borderRadius={10}
        boxShadow="rgb(0 0 0 / 20%) 0px 0px 30px -1px"
      >
        <Image
          pos="absolute"
          top={-10}
          borderRadius="full"
          boxSize="110px"
          src={avatar}
          alt="Luis Cancel"
        />
        <Container>
          Buffer has made sharing our story and building our brand on social
          media so much easier.
        </Container>
        <Image
          m="-20px"
          // boxSize="150px"
          border="1px red solid"
          w={150}
          h={70}
          src="https://miro.medium.com/max/1050/1*Szxnu0tuAF0Utt6xDnBq4w.jpeg"
        />
        <Heading fontSize={20}>Luis Cancel, Managing Editor</Heading>
      </VStack>
    </Box>
  );
};

export default function Sliding() {
  return (
    <Box p="10% 0">
      <Ticker>{() => <Card {...data[0]} />}</Ticker>
    </Box>
  );
}
