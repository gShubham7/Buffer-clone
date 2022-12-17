import React from 'react'
import style from "./part1.module.css"
import {ChevronRightIcon, WarningIcon} from "@chakra-ui/icons"

export const Part1 = () => {
  return (
    <div className={style.part1}>
       <div className={style.left}>
           <img src="https://buffer.com/resources/content/images/size/w600/2022/12/jeshoots-com-MCm43tSNVhY-unsplash--1-.jpg" />
       </div>
       <div className={style.right}>
          <p>Publications <ChevronRightIcon /> Flow</p>
          <h1>Holiday Gift Guide of Small Businesses</h1>
          <p>We've rounded up several products that would make the perfect gifts this holiday season. Even better, they're all from small businesses you can feel good about supporting.</p>
          <div className={style.date}>Dec 15, 2022   <WarningIcon /> 8min read </div>
          <div className={style.flexbox}>
             <div>
             <img src="https://buffer.com/resources/content/images/size/w300/2022/03/Untitled-design.png" />
             </div>
             <div>
               <h3>Umber Bhatti</h3>
               <p>Content Writer @ Ecotone</p>
             </div>
          </div>
       </div>
    </div>
  )
}
