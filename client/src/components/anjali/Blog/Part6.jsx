import { Flex,Button } from '@chakra-ui/react'
import React from 'react'
import style from "./part6.module.css"
import {CheckIcon} from "@chakra-ui/icons";

export const Part6 = () => {
  return (
    <div className={style.Part6}>
     <div>
       <h1>Join 140,000+ small businesses like yours that use Buffer to build their brand on social media every month</h1>
       <Button fontWeight="bold" w="200px" mt="30px" colorScheme='white' bg="#fe5c75" variant='solid'>Sign up for free</Button>
       <div className={style.inner}> 
        <p><CheckIcon /> No credit card required</p>
        <p><CheckIcon /> Cancel anytime</p>
       </div>
       </div>
    </div>
  )
}
