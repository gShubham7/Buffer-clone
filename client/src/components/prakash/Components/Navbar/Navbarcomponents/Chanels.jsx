import { Flex,useDisclosure,MenuItem,Menu,MenuButton,MenuList, Image,Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import "./tools.css"


function Chanels(){
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <Menu isOpen={isOpen}>
            <MenuButton
                variant="bike"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg:"none" }}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                fontSize='xl'
                className="btn"
            >
                Channels {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} w="300px" p="10px">
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/QDb78By/1.png" w="2rem" h="2rem"/>
                        <Text as='b'>Facebook</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/KNnFScS/2.png" w="2rem" h="2rem"/>
                        <Text as='b'>Google Business Profile</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/W58qWXR/3.png" w="2rem" h="2rem"/>
                        <Text as='b'>Instagram</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/8mmZfny/4.png" w="2rem" h="2rem"/>
                        <Text as='b'>LinkedIn</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/h9bFQmC/5.png" w="2rem" h="2rem"/>
                        <Text as='b'>Pinterest</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/YTwrjBW/6.png" w="2rem" h="2rem"/>
                        <Text as='b'>Shopify</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/nCN7jWZ/7.png" w="2rem" h="2rem"/>
                        <Text as='b'>TikTok</Text>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/rk28yHY/8.png" w="2rem" h="2rem"/>
                        <Text as='b'>Twitter</Text>
                    </Flex>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default Chanels;