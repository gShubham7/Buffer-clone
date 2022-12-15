import React, { useState } from "react";
import { Box, Image, Text, Flex, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { BsCaretDownFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";
import InnerModal from "./InnerModal";

const AltNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width={["100%", "100%", "100%", "100%", "100%"]}
        boxShadow={" rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"}
        overflowX="hidden"
      >
        <HamburgerIcon
          fontSize={30}
          display={["block", "block", "block", "block", "none"]}
          onClick={() => {
            setShowModal(true);
          }}
        />
        <Flex
          alignItems="center"
          display={["none", "none", "none", "none", "flex"]}
          width={["0%", "0%", "0%", "0%", "50%"]}
        >
          <NavLink to="/">
            <Flex pr="20px" pl="20px" gap="1">
              <Image w="100px" src="./Ecotone_small.png" />
              {/* <Text fontSize="xl" fontWeight="bold">
                Buffer
              </Text> */}
            </Flex>
          </NavLink>
          <Flex>
            <NavLink to="/publishing">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Publishing
                </Text>
              </Box>
            </NavLink>
            <NavLink to="/analytics">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Analytics
                </Text>
              </Box>
            </NavLink>
            <NavLink to="/engagement">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Engagement
                </Text>
              </Box>
            </NavLink>
            <NavLink to="#">
              <Box
                p="1.2rem"
                pl="28px"
                pr="28px"
                color="rgb(99, 99, 99)"
                _hover={{ backgroundColor: "#F5F5F5", color: "#2C4BFF" }}
              >
                <Text fontSize="md" fontWeight="bold">
                  Start Page
                </Text>
              </Box>
            </NavLink>
          </Flex>
        </Flex>
        <Flex
          alignItems="center"
          display={["none", "none", "flex", "flex", "flex"]}
          width={["50%", "50%", "80%", "80%", "50%"]}
        >
          <NavLink to="#">
            <Flex
              alignItems="center"
              gap="4px"
              color="#2C4BFF"
              p="1.2rem"
              pl="28px"
              pr="28px"
            >
              <FaUserFriends />
              <Text fontWeight="medium" fontSize="md">
                Invite Your Team
              </Text>
            </Flex>
          </NavLink>
          <NavLink to="#">
            <Flex
              alignItems="center"
              p="1.2rem"
              pl="28px"
              pr="28px"
              color="rgb(99, 99, 99)"
              _hover={{ backgroundColor: "#F5F5F5", color: "#433D3D" }}
              gap="4px"
            >
              <Text fontSize="14px" fontWeight="medium">
                Apps
              </Text>
              <BsCaretDownFill fontSize="12px" />
            </Flex>
          </NavLink>
          <NavLink to="#">
            <Flex
              alignItems="center"
              p="1.2rem"
              pl="28px"
              pr="28px"
              color="rgb(99, 99, 99)"
              _hover={{ backgroundColor: "#F5F5F5", color: "#433D3D" }}
              gap="4px"
            >
              <Text fontSize="14px" fontWeight="medium">
                Help
              </Text>
              <BsCaretDownFill fontSize="12px" />
            </Flex>
          </NavLink>
          <NavLink to="#">
            <Flex pl="150px" _hover={{ backgroundColor: "#F5F5F5" }}>
              <Text color="#D5C4BA">USERNAME/EMAIL</Text>
              <FaUserCircle icon="fa-duotone" size="26px" color="#121E66" />
            </Flex>
          </NavLink>
        </Flex>
        {showModal ? (
          <InnerModal show={showModal} setModal={setShowModal} />
        ) : (
          ""
        )}
      </Flex>
    </>
  );
};

export default AltNavbar;
