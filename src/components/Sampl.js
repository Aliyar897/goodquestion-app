import React from 'react'
import Center from './Center'
import Footer from './Footer'
import LeftSide from './LeftSide'
import Navbar from './Navbar'
import RightSide from './RightSide'

export default function Sampl() {
  return (
    <div>
      {/* <h1>Helo world</h1> */}
      <Navbar />
      <RightSide /> 
      <Center />
      <LeftSide />
      <Footer />
    </div>
  )
  
}
