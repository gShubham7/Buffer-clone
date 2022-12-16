import React from 'react'
import style from "./home.module.css";
import { Heading,Text } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react'
 import {AddIcon} from "@chakra-ui/icons"

export const HomeAna = () => {
  return (
    <div>
    <div className={style.head}>
           <Heading as='h3' size='lg'>Good afternoon!</Heading>
           <Text fontSize='md'>Charts are great, but sometimes you just want straight answers.Marks sure to check out our Answers tab.</Text>
          
           </div>
           <div className={style.totals}> 
           <Heading fontSize='lg'>Totals</Heading>
           <Text fontSize='md' mt="20px">Connect Facebook, Instagram, Twitter, LinkedIn Pages or (and!) Shopify to begin analyzing your marketing efforts.</Text>

          <div className={style.plus}>
          <IconButton
          variant='outline'
          aria-label='Search database'
          icon={<AddIcon />}
        /></div>
           </div>

    </div>
  )
}
