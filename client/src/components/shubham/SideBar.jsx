import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { AiTwotoneCalendar } from "react-icons/ai";
import { HiTrendingUp } from "react-icons/hi";
import { TbList } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const sideBar = () => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="space-between"
        w="16%"
        h="90vh"
        borderRight="1px solid #c7c7c7"
      >
        <Box mt="15px" w="100%">
          <NavLink to="/publishing/calender">
            <Flex
              w="90%"
              borderRadius="4px"
              pl="5px"
              alignItems="center"
              gap="5px"
              m="auto"
              backgroundColor="#2C4BFF"
              color="white"
              h="33px"
              _hover={{ cursor: "pointer" }}
            >
              <AiTwotoneCalendar />
              <Text fontSize="sm" fontWeight="semibold">
                Calendar
              </Text>
            </Flex>
          </NavLink>

          <Box mt="10px">
            <NavLink to="#">
              <Flex
                w="90%"
                borderRadius="4px"
                pl="5px"
                alignItems="center"
                gap="5px"
                m="auto"
                h="33px"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "#D6D6D6",
                }}
              >
                <HiTrendingUp color="#c7c7c7" />
                <Text fontSize="sm" fontWeight="semibold">
                  Campaigns
                </Text>
              </Flex>
            </NavLink>
          </Box>
          <Box mt="10px">
            <Flex
              w="90%"
              borderRadius="4px"
              pl="5px"
              alignItems="center"
              gap="5px"
              m="auto"
              h="33px"
              _hover={{
                cursor: "pointer",
                backgroundColor: "#D6D6D6",
              }}
            >
              <TbList color="#c7c7c7" />
              <Text fontSize="sm" fontWeight="semibold">
                Queues
              </Text>
            </Flex>
            <NavLink to="/publishing/facebook">
              <Flex
                w="90%"
                borderRadius="4px"
                pl="5px"
                alignItems="center"
                gap="5px"
                m="auto"
                ml="40px"
                h="33px"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "#D6D6D6",
                }}
              >
                <BsFacebook />
                <Text fontSize="sm" fontWeight="semibold">
                  Facebook
                </Text>
              </Flex>
            </NavLink>
            <NavLink to="/publishing/instagram">
              <Flex
                w="90%"
                borderRadius="4px"
                pl="5px"
                alignItems="center"
                gap="5px"
                m="auto"
                ml="40px"
                h="33px"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "#D6D6D6",
                }}
              >
                <BsInstagram />
                <Text fontSize="sm" fontWeight="semibold">
                  Instagram
                </Text>
              </Flex>
            </NavLink>
            <NavLink to="/publishing/twitter">
              <Flex
                w="90%"
                borderRadius="4px"
                pl="5px"
                alignItems="center"
                gap="5px"
                m="auto"
                ml="40px"
                h="33px"
                _hover={{
                  cursor: "pointer",
                  backgroundColor: "#D6D6D6",
                }}
              >
                <BsTwitter />
                <Text fontSize="sm" fontWeight="semibold">
                  Twitter
                </Text>
              </Flex>
            </NavLink>
          </Box>
        </Box>
        <Box mb="10px">
          <NavLink to="/channels">
            <Flex
              justifyContent="center"
              alignItems="center"
              w="90%"
              border="1px solid #c7c7c7"
              borderRadius="4px"
              pl="5px"
              gap="5px"
              m="auto"
              h="40px"
              _hover={{
                cursor: "pointer",
                border: "1px solid grey",
              }}
            >
              <NavLink to="/channels">
                <Text color="grey" fontSize="sm" fontWeight="semibold">
                  Manage Channels
                </Text>
              </NavLink>
            </Flex>
          </NavLink>
        </Box>
      </Flex>
    </>
  );
};

export default sideBar;
