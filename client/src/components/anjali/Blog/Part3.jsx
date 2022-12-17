import React from 'react';
import { Flex, Heading, Button, Text, Input } from '@chakra-ui/react'
import style from "./part3.module.css";

export const Part3 = () => {
  return (
    <div style={{
        margin: "auto",
        width: "40%",
        marginTop: "40px"
    }}>
    <Heading as='h2' size={{base:'lg',md:'lg',lg:'xl'}}>Subscribe to our newsletter</Heading>
    <Text fontSize={{base:'md',md:'md', lg:'lg'}} mt='20px'>We’ll keep you in the loop on our best advice and strategies for social media marketing and growing a small business.</Text>

    <div className={style.flex}>
    <Input w={{base:'250px',md:'350px', lg:'450px'}} variant='outline' placeholder='Your email address...' />
    <Button colorScheme='white' bg="#e97284" variant='solid'>Subscribe</Button>
    </div>
    </div>
  )
}
