import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import Hero from './Hero'
import homeHeroImage from '../../../assets/backgrounds/HomeHeroImage.png'

export const DarkSimple = () => {
  return (
    <Hero
      shouldAnimate={true}
      themeMode="dark"
      tagLine="web development services"
      title="Your website does a lot for your business."
      description="Why not take care of it? After all, an underperforming website can leave your company in the dust. We partner with brands like yours to build, optimize, and grow sites and applications into memorable experiences that inform, inspire, and empower your customers. You're proud of the brand you've built, now you'll be proud of your website, too."
      linkLabel="View our work"
      linkUrl="#viewourwork"
    />
  )
}

export const DarkWithImage = () => {
  return (
    <Hero
      shouldAnimate={true}
      themeMode="dark"
      tagLine="web development services"
      title="Your website does a lot for your business."
      description="Why not take care of it? After all, an underperforming website can leave your company in the dust. We partner with brands like yours to build, optimize, and grow sites and applications into memorable experiences that inform, inspire, and empower your customers. You're proud of the brand you've built, now you'll be proud of your website, too."
      linkLabel="View our work"
      linkUrl="#viewourwork"
      imageUrl={homeHeroImage}
    />
  )
}

export const DarkWithVideo = () => {
  return (
    <Hero
      shouldAnimate={true}
      themeMode="dark"
      title="Our Story"
      description="A little blurb about who you are, why you got started, and how you work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      videoUrl="https://www.youtube.com/watch?v=ysz5S6PUM-U"
    />
  )
}

export const LigthSimple = () => {
  return (
    <Hero
      shouldAnimate={true}
      themeMode="light"
      tagLine="web development services"
      title="Your website does a lot for your business."
      description="Why not take care of it? After all, an underperforming website can leave your company in the dust. We partner with brands like yours to build, optimize, and grow sites and applications into memorable experiences that inform, inspire, and empower your customers. You're proud of the brand you've built, now you'll be proud of your website, too."
      linkLabel="View our work"
      linkUrl="#viewourwork"
    />
  )
}

export const LightWithImage = () => {
  return (
    <Hero
      shouldAnimate={true}
      themeMode="light"
      tagLine="web development services"
      title="Your website does a lot for your business."
      description="Why not take care of it? After all, an underperforming website can leave your company in the dust. We partner with brands like yours to build, optimize, and grow sites and applications into memorable experiences that inform, inspire, and empower your customers. You're proud of the brand you've built, now you'll be proud of your website, too."
      linkLabel="View our work"
      linkUrl="#viewourwork"
      imageUrl={homeHeroImage}
    />
  )
}

export const LightWithVideo = () => {
  return (
    <Hero
      shouldAnimate={true}
      themeMode="light"
      title="Our Story"
      description="A little blurb about who you are, why you got started, and how you work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
      videoUrl="https://www.youtube.com/watch?v=ysz5S6PUM-U"
    />
  )
}

export default {
  title: 'Organisms/Hero',
  component: Hero,
  name: 'Hero'
} as Meta
