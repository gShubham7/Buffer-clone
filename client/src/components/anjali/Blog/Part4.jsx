import React from 'react'
import style from "./part4.module.css";
import { Text,Button } from '@chakra-ui/react';

export const Part4 = () => {
  return (
    <div className={style.Part4}>
       <div className={style.flex}>
         <div className={style.left}>
            <img src="https://buffer.com/resources/assets/img/SmallBusinessBanner2.png?v=78ecc70eb7" />
         </div>
         <div className={style.right}>
         <p className={style.text}>Small Business, Big Lessons is a podcast from Buffer that goes behind the scenes with inspirational small businesses who are truly driving innovation and redefining how work happens.</p>
         <Button mt="20px" w="200px" fontWeight="bold" colorScheme='white' bg="#e97284" variant='solid'>Listen Now</Button>
       
         </div>

       </div>
    </div>
  )
}
