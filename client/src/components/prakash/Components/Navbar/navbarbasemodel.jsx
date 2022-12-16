import {
  Box,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import eco from "../../images/logo.jpg";

function Navbarbasemodel() {
  const [dis, setdish] = useState(false);

  const changedis = () => {
    setdish(!dis);
  };

  if (dis == false) {
    return (
      <HamburgerIcon
        fontSize="35px"
        onClick={changedis}
        display={{ base: "block", lg: "none" }}
      />
    );
  } else {
    return (
      <Box
        zIndex="1000"
        bg="#f7f7f7"
        w="100vw"
        h="100vh"
        position="absolute"
        right="0"
        top="0"
        overflow="hidden"
      >
        <Flex
          w="97%"
          m="auto"
          p="6"
          rounded="md"
          h="70px"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link to="/" cursor="pointer">
            <Image
              boxSize="150px"
              height="50px"
              width="140px"
              src={eco}
            ></Image>
          </Link>
          <CloseIcon
            color="black"
            w="20px"
            h="20px"
            onClick={changedis}
            display={{ base: "block", lg: "none" }}
          />
        </Flex>
        <Accordion allowToggle w="fit-content" m="auto" border="none">
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="center"
                  color="black"
                  as="b"
                  fontSize="24px"
                >
                  Tools
                </Box>
                <AccordionIcon color="black" fontSize="35px" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex
                direction="column"
                gap="15px"
                color="black"
                as="b"
                fontSize="18px"
              >
                <Link to="/publishing"><Text>Publish</Text></Link>
                <Text>Analyze</Text>
                <Text>Engage</Text>
                <Text>Start Page</Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="center"
                  color="black"
                  as="b"
                  fontSize="24px"
                >
                  Channels
                </Box>
                <AccordionIcon color="black" fontSize="35px" />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex
                direction="column"
                gap="15px"
                color="black"
                as="b"
                fontSize="18px"
              >
                <Text>Facebook</Text>
                <Text>Google Business Profile</Text>
                <Text>Instagram</Text>
                <Text>LinkedIn</Text>
                <Text>Pinterest</Text>
                <Text>Spotify</Text>
                <Text>TikTok</Text>
                <Text>Twitter</Text>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Flex
          direction="column"
          gap="15px"
          color="black"
          alignItems="center"
          as="b"
          fontSize="24px"
          mt="15px"
          mb="15px"
        >
          <NavLink to="/pricing">
            <Text>Pricing</Text>
          </NavLink>
          <NavLink to="/blogs">
            <Text>Blog</Text>
          </NavLink>
          <Button
            bg="skyblue"
            w="fit-content"
            fontSize="20px"
            p="20px"
            mb="15px"
          >
            Get started now
          </Button>
          <Text>
            <NavLink to="/login">Log in</NavLink>
          </Text>
        </Flex>
      </Box>
    );
  }
}

export default Navbarbasemodel;
