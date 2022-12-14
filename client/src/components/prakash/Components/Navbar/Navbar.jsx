import React from "react";
import { Button, Image, Text, Flex, Box,HStack} from "@chakra-ui/react";
import NavbarLgModel from "./NavbarLgModel";
import "./navbar.css"
import Navbarbasemodel from "./navbarbasemodel"

import Ecotone from "../../images/log1.jpg"

import {Link} from "react-router-dom"



function Navbar(){
  
    return (
  
    <>
    
         <HStack padding='20px 20px' bgColor='#6b81ff'>

        <Text margin="auto" fontSize='l' fontWeight="400" color="white"><Button borderRadius="15px" margin="auto" color="black">New</Button>  Create and schedule Twitter threads !Find out more </Text>
    
        </HStack>
        
        <Flex w="97%" m="auto" boxShadow='base' p='6' rounded='md' bg='#f7f7f7' h={{base:"70px", lg:"110px"}} justifyContent="space-between" alignItems="center">
        
            <Box>
        
                <Link to="/" cursor="pointer">
                    <Image
                    boxSize="150px"
                    height="50px"
                    width="140px"
                    src={Ecotone}
                    ></Image>
                </Link> 
    
            </Box>

        <NavbarLgModel/>
        
    <Flex gap="15px">
             
         <Text display={{base:"none",lg:"flex"}} color="rgb(77, 103, 255)" cursor="pointer" fontSize='xl'><Link to="/">Log in</Link></Text>
               
                <Button color="white" bg="rgb(44,75,255)" fontSize={{base:".7rem", lg:"xl"}} p="15px" _hover={{bg:"rgb(31, 53, 179)"}}>Get started now</Button>
              
                <Navbarbasemodel/>
            </Flex>           
        

        </Flex>
       
        </>
    )
}

export default Navbar;