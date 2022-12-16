import React from 'react'
import { Heading,Text,Button } from '@chakra-ui/react'
import style from "./socialconnect.module.css";

export const SocialConnect = () => {
  return (
    <div className={style.connect}>
      <div className={style.social}>
        <img src="https://buffer-analyze.s3.amazonaws.com/images/illustration-thinking.png" />
      </div>
      <div className={style.textarea}>
      <Heading as='h3' size='lg'>Connect your Social Page</Heading>
      <Text fontSize='md' mt="20px">Connect your Facebook Page to get insights on your posts, audience growth, reach, engagement and more!</Text>
      <Button color="white" bg='#2c4bff' mt="20px" variant='solid'>Connect</Button>
      </div>
    </div>
  )
}
