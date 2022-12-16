import { Flex, Text } from "@chakra-ui/react";
import Tools from "./Navbarcomponents/Tools"
import Chanels from "./Navbarcomponents/Chanels";
import { NavLink } from "react-router-dom";




function NavbarLgModel(){

    return (
        <Flex alignItems="center" display={{base:"none",lg:"flex"}}>
            <Tools/>
            <Chanels/>
            <NavLink to="/pricing"><Text fontSize="xl" mr="3.7rem" className="btn">Pricing</Text></NavLink>
            <NavLink to="/blogs"><Text fontSize="xl" mr="3.7rem" className="btn">Blog</Text></NavLink>
        </Flex>
    )
}

export default NavbarLgModel;