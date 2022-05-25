import React from 'react'
import Header from '@/components/Header'

import s from './style.module.less'

const About = () => {
  return <>
    <Header title='项目碎碎念' />
    <div className={s.about}>
      <h2>关于项目</h2>
        <ul>
          <li>后端：Node.js, 使用了 egg 作为开发框架</li>
          <li>前端：React 17, 使用了 Zarm 作为组件库</li>
        </ul>
      <h2>关于我</h2>
        <ul>
          <li><a href="https://github.com/5Reasons">Github</a>, <a href="https://juejin.cn/user/2374588922342669">掘金</a></li>
          <li>博客搭建中 / 求职中</li>
        </ul>
      <h2>Todo</h2>
        <ul>
          <li>使用 TS 重构前后端（使用 Nest 重构，引入 Sequelize 等</li>
          <li>微调、优化前端样式</li>
          <li>输出相关技术栈学习笔记若干</li>
        </ul>
    </div>
  </>
};

export default About;