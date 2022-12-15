import { Flex,useDisclosure,MenuItem,Menu,MenuButton,MenuList,Image, Text } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import "./tools.css";

function Tools(){
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
                Tools {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose} w="300px" p="10px">
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/CJzGTXC/Screenshot-2022-09-28-103820.png" w="2rem" h="2rem"/>
                        <Flex direction="column">
                            <Text as='b'>Publishing</Text>
                            <Text fontSize='sm' color="rgb(99, 99, 99)">Plan, collaborate and publish thumb-stopping content</Text>
                        </Flex>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">

                        <Image src="https://i.ibb.co/bzhwQ56/Screenshot-2022-09-28-103950.png" w="2rem" h="2rem"/>
                        <Flex direction="column">
                            <Text as='b'>Analytics</Text>
                            <Text fontSize='sm' color="rgb(99, 99, 99)">Analyze social media performance and create reports</Text>
                        
                        </Flex>
                    </Flex>
                </MenuItem>
                <MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/GQFPgvq/Screenshot-2022-09-28-104021.png" w="2rem" h="2rem"/>
                        <Flex direction="column">
                            <Text as='b'>Engagement</Text>
                            <Text fontSize='sm' color="rgb(99, 99, 99)">Quickly navigate your comments and engage with your audience</Text>
                        </Flex>
                    </Flex>
                </MenuItem><MenuItem p="10px" borderRadius="10px">
                    <Flex gap="10px">
                        <Image src="https://i.ibb.co/dKgWYgT/Screenshot-2022-09-28-104040.png" w="2rem" h="2rem"/>
                        <Flex direction="column">
                            <Text as='b'>Start page</Text>
                            <Text fontSize='sm' color="rgb(99, 99, 99)">Build a customize landing page in minutes</Text>
                        </Flex>
                    </Flex>

                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default Tools;