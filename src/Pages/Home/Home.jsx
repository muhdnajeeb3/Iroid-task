import React from 'react'
import Corporate from '../../components/CorprateInfo/Corporate'
import Footer from '../../components/Footer/Footer'
import Helpline from '../../components/HelpLine/Helpline'
import MainSection from '../../components/MainSection/MainSection'
import NavbarMain from '../../components/Navbar/Navbar'

function Home() {
  const mobile = window.innerWidth < 500
  return (
   <>
   <Helpline />
   <NavbarMain mobile={mobile}/> 
   <MainSection mobile={mobile}/>
   <Corporate mobile={mobile}/>
   <Footer mobile={mobile}/>
   </>
  )
}

export default Home