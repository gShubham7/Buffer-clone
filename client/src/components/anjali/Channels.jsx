import React from 'react'
import style from "./channel.module.css"
import { Heading,Text } from '@chakra-ui/react'

export const Channels = () => {
  return (
    <div className={style.maindiv}>
       <div className={style.first}>
          <div>Setting</div>
          <div className={style.sidebar}>
          <div>
          <img src="https://img.icons8.com/material-rounded/2x/user.png"/>
             Account
          </div>
          <div>
            <img src="https://img.icons8.com/external-others-nixx-design/2x/external-billing-business-strategy-others-nixx-design-2.png" />
              Billing
          </div>
          <div>
          <img src="https://img.icons8.com/material-sharp/512/windows-client.png" />
             Channels
          </div>
          <div>
            <img src="https://img.icons8.com/fluency-systems-filled/512/organization.png" />
              Organization
          </div>
          </div>
       </div>
       <div className={style.second}>
       <Heading as='h2' size='xl'>Connect a new channel</Heading>
       <Text fontSize='md' color='gray' mt="20px">Looking for step-by-step instructions? Visit our Help Center to read our Getting Started guides and learn about supported channel types.</Text>

       <div className={style.gridbox}>
          <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-oa-rH1gU-GejTDx3hM4xU0Lkqk351pRX5A&usqp=CAU" />
             <p className={style.p1}>Start Page</p>
             <p className={style.p2}>A sharable landing page</p>
             <p className={style.p3}>Create</p>
          </div>

          <div>
          <img src="data:image/png;base64,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" />
             <p className={style.p1}>LinkedIn</p>
             <p className={style.p2}>Page or Profile</p>
             <p className={style.p3}>Connect</p>
          </div>

          <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj3381FM6QSQZtDuGDw_zh7ZjwK0blReTyQA&usqp=CAU" />
          <p className={style.p1}>Instagram</p>
          <p className={style.p2}>Business Account</p>
          <p className={style.p3}>Connect</p>
          </div>


          <div>
          <img src="data:image/png;base64,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" />
          <p className={style.p1}>Facebook</p>
          <p className={style.p2}>Page or Profile</p>
          <p className={style.p3}>Connect</p>
          </div>

          <div>
          <img src="data:image/png;base64,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" />
          <p className={style.p1}>Twitter</p>
          <p className={style.p2}>Profile</p>
          <p className={style.p3}>Connect</p>
          </div>

          <div>
          <img src="data:image/png;base64,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" />
          <p className={style.p1}>Pinterest</p>
          <p className={style.p2}>Business</p>
          <p className={style.p3}>Connect</p>
          </div>

          <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScFJIHfkYz4ojhpGt2V5y7RB7U6A1D243G9Q&usqp=CAU" />
          <p className={style.p1}>Google Business Profile</p>
          <p className={style.p2}>Account</p>
          <p className={style.p3}>Connect</p>
          </div>

          <div>
          <img src="data:image/jpeg;base64,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" />
             <p className={style.p1}>Tiktok</p>
             <p className={style.p2}>Business Account</p>
             <p className={style.p3}>Connect</p>
         </div>

         <div>
         <img src="data:image/png;base64,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" />
         <p className={style.p1}>Shopify</p>
         <p className={style.p2}>Store</p>
         <p className={style.p3}>Connect</p>
         </div>

       </div>
       </div>
    </div>
  )
}
