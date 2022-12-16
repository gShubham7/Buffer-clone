import { Flex, Text } from "@chakra-ui/react";
import Tools from "./Navbarcomponents/Tools"
import Chanels from "./Navbarcomponents/Chanels";




function NavbarLgModel(){

    return (
        <Flex alignItems="center" display={{base:"none",lg:"flex"}}>
            <Tools/>
            <Chanels/>
            <Text fontSize="xl" mr="3.7rem" className="btn">Pricing</Text>
            <Text fontSize="xl" mr="3.7rem" className="btn">Blog</Text>
        </Flex>
    )
}

export default NavbarLgModel;