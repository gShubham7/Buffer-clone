import { Flex, Image, Text, } from "@chakra-ui/react";
import Eco from "../../images/logo.jpg"


function Footer(){

    return (
        <Flex w="80%" gap="70px"   margin="auto" direction={{base:"column", lg:"row"}} broder-color="1px solid red" justifyContent={{base:"center",lg:"space-around"}}>
            <Flex direction="column" alignItems={{base:"center",lg:"flex-start"}}>
                <Image mb={{base:"30px", lg:"100px"}} src={Eco} w="140px"/>
                <Image mb={{base:"20px", lg:"10px"}} src="https://i.ibb.co/QmQwksC/Screenshot-2022-09-29-182432.png"/>
                <Text fontFamily="Poppins, sans-serif">Download</Text>
                <Flex direction={{base:"column", lg:"row"}}>
                    <Image src="https://i.ibb.co/P4WH6rZ/Screenshot-2022-09-29-182942.png"/>
                    <Image src="https://i.ibb.co/JQRqnQx/Screenshot-2022-09-29-183011.png"/>
                </Flex>
                <Text fontSize="20px" mt={{base:"20px", lg:"10px"}} color="rgb(130, 130, 130)">Copyright ©2022 Ecotone | Privacy | Terms | Security </Text>
            </Flex>
            <Flex direction={{base:"column", lg:"row"}} gap="10px">
                <Flex direction="column" gap="10px" fontSize="20px" alignItems={{base:"center", lg:"flex-start"}}>
                    <Text fontFamily="Poppins, sans-serif">Tools</Text>
                    <Text>Publishing</Text>
                    <Text>Analytics</Text>
                    <Text>Engagement</Text>
                    <Text>Start Page</Text>
                    <Text>Extras</Text>
                </Flex>
            </Flex>
            <Flex direction={{base:"column", lg:"row"}} gap="10px">
                <Flex direction="column" gap="10px" fontSize="20px" alignItems={{base:"center", lg:"flex-start"}}>
                <Text fontFamily="Poppins, sans-serif">Resources</Text>
                    <Text>Blog</Text>
                    <Text>Content Library</Text>
                    <Text>Browser Extension</Text>
                    <Text>Free Image Editor</Text>
                </Flex>
            </Flex>
            <Flex direction={{base:"column", lg:"row"}} gap="10px">
                <Flex direction="column" gap="10px" fontSize="20px" alignItems={{base:"center", lg:"flex-start"}}>
                <Text fontFamily="Poppins, sans-serif">Support</Text>
                    <Text>Help Center</Text>
                    <Text>Status</Text>
                    <Text>Changelog</Text>
                    <Text>Product Roadmap</Text>
                </Flex>
            </Flex>
            <Flex direction={{base:"column", lg:"row"}} gap="10px">
                <Flex direction="column" gap="10px" fontSize="20px" alignItems={{base:"center", lg:"flex-start"}}>
                <Text fontFamily="Poppins, sans-serif" size="20px">Company</Text>
                    <Text>About</Text>
                    <Text>Transparency</Text>
                    <Text>Careers</Text>
                    <Text>Accessibility</Text>
                    <Text>Press</Text>
                    <Text>Sitemap</Text>
                </Flex>
            </Flex>

        </Flex>

        
    )
}

export default Footer;
