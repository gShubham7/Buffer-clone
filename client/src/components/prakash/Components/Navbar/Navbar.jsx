import React from "react";
import { Button, Image, Text, Flex, Box, HStack } from "@chakra-ui/react";
import NavbarLgModel from "./NavbarLgModel";
import "./navbar.css";
import Navbarbasemodel from "./navbarbasemodel";

import Ecotone from "../../images/log1.jpg";

import { Nav, NavLink, NavLinkLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <HStack padding="10px 20px" bgColor="#6b81ff">
        <Text margin="auto" fontSize="l" fontWeight="400" color="white">
          <Button borderRadius="15px" margin="auto" color="black">
            New
          </Button>{" "}
          Create and schedule Twitter threads !Find out more{" "}
        </Text>
      </HStack>

      <Flex       
        m="auto"
        boxShadow="base"
        p="6"
        rounded="md"
        bg="#f7f7f7"
        h={{ base: "80px" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <NavLink to="/" cursor="pointer">
            <Image          
              width="140px"
              src={Ecotone}
            ></Image>
          </NavLink>
        </Box>

        <NavbarLgModel />

        <Flex gap="15px">
          <Text
            display={{ base: "none", lg: "flex" }}
            color="rgb(77, 103, 255)"
            cursor="pointer"
            fontSize="xl"
          >
            <NavLink to="/login">Log in</NavLink>
          </Text>

          <Button
            color="white"
            bg="rgb(44,75,255)"
            fontSize={{ base: ".7rem", lg: "xl" }}
            p="15px"
            _hover={{ bg: "rgb(31, 53, 179)" }}
          >
            Get started now
          </Button>

          <Navbarbasemodel />
        </Flex>
      </Flex>
    </div>
  );
}

export default Navbar;
