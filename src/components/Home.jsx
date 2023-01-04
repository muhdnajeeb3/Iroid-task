import React from 'react'
import Corporate from './CorprateInfo/Corporate'
import Footer from './Footer/Footer'
import Helpline from './HelpLine/Helpline'
import MainSection from './MainSection/MainSection'
import NavbarMain from './Navbar/Navbar'

function Home() {
  return (
   <>
   <Helpline />
   <NavbarMain /> 
   <MainSection />
   <Corporate />
   <Footer />
   </>
  )
}

export default Home