import React, { useState } from 'react'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Team from './Team'
import Clients from './Clients'
import Contacts from './Contact'
import Modal from './Modal'


const Home = () => {
 
  return (
    <>
    <Services />
    <Portfolio />
    <About />
    <Team />
   
    <Clients />
    <Contacts />
    <Modal />
    </>
  )
}

export default Home