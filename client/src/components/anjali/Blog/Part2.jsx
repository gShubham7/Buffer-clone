import React from 'react'
import style from "./part2.module.css"
import {ChevronRightIcon,WarningIcon,ViewIcon} from "@chakra-ui/icons"

export const Part2 = () => {
  return (
    <div className={style.Part2}>
      <div>
         <div className={style.first}>
           <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/12/rahadiansyah-dz1hrML7pmM-unsplash--1-.jpg" />
         </div>
         <div className={style.second}>Publications <ChevronRightIcon /> <b>Flow</b></div>
         <div className={style.head}>What You Need to Know About TikTok SEO</div>
         <div className={style.flex1}>
           <p>Dec 13, 2022</p>
           <p><ViewIcon /> 10 min read</p>
           <p><WarningIcon /> Flow</p>
         </div>
         <div className={style.third}>With the buzz around TikTok’s value as a source of knowledge for its audience, businesses and creators need to pay attention to TikTok SEO which helps you get your videos to the top of TikTok’s search results. Here’s how to get started with optimizing your TikTok content for search.</div>
         <div className={style.flex2}>
            <img src="https://buffer.com/resources/content/images/size/w100/2022/03/B6060E07-7A0E-4C6C-82EE-C654EA065314_1_102_o.jpeg" />
            <div>
            <p>Tamilore Oladipo,</p>
            <p>Content Writer @ Ecotone</p>
            </div>
         </div>
      </div>

      <div>
         <div className={style.first}>
           <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/12/ASK-BUFFER-01--1---1--2.png" />
         </div>
         <div className={style.second}>Publications <ChevronRightIcon /> <b>Flow</b></div>
         <div className={style.head}>What You Need to Know About TikTok SEO</div>
         <div className={style.flex1}>
           <p>Dec 14, 2022</p>
           <p><ViewIcon /> 8 min read</p>
           <p><WarningIcon /> Flow</p>
         </div>
         <div className={style.third}>In this #AskBuffer, we cover why consistency is the key to growing your Twitter account.</div>
         <div className={style.flex2}>
            <img src="https://buffer.com/resources/content/images/size/w100/2022/03/Untitled-design.png" />
            <div>
            <p>Umber Bhatti,</p>
            <p>Content Writer @ Ecotone</p>
            </div>
         </div>
      </div>

      <div>
      <div className={style.first}>
        <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/12/rad--1-.jpg" />
      </div>
      <div className={style.second}>Publications <ChevronRightIcon /> <b>Flow</b></div>
      <div className={style.head}>The Radical Mindset Shifts That Helped Me Build a Multi Six-Figure Business During a Time of Scarcity</div>
      <div className={style.flex1}>
        <p>Dec 12, 2022</p>
        <p><ViewIcon /> 6 min read</p>
        <p><WarningIcon /> Flow</p>
      </div>
      <div className={style.third}>Scaling a business during a time of scarcity is challenging, but Gloria Chou figured out how to turn crisis into an opportunity for growth. Here are the mindset shifts that helped her pivot and grow after losing all of her client work.</div>
      <div className={style.flex2}>
         <img src="https://buffer.com/resources/content/images/size/w100/2022/12/Blog_Guest-Contributors--14-.png" />
         <div>
         <p>Gloria chou,</p>
         <p>Gloria Chou, creator of the PR Starter pack</p>
         </div>
      </div>
   </div>

   <div>
      <div className={style.first}>
        <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/12/mehmet-bozgedik-S0fblDXpNBo-unsplash--1-.jpg" />
      </div>
      <div className={style.second}>Publications <ChevronRightIcon /> <b>Flow</b></div>
      <div className={style.head}>The Radical Mindset Shifts That Helped Me Build a Multi Six-Figure Business During a Time of Scarcity</div>
      <div className={style.flex1}>
        <p>Dec 8, 2022</p>
        <p><ViewIcon /> 5 min read</p>
        <p><WarningIcon /> Flow</p>
      </div>
      <div className={style.third}>We explore predictions about the future of personal branding through the expert opinions of Social Proof interviewees and my own thoughts based on general market trends.</div>
      <div className={style.flex2}>
         <img src="https://buffer.com/resources/content/images/size/w100/2022/03/B6060E07-7A0E-4C6C-82EE-C654EA065314_1_102_o.jpeg" />
         <div>
         <p>Tamilore Oladipo,</p>
         <p>Content Writer @ Ecotone</p>
         </div>
      </div>
   </div>
    
    </div>
  )
}
