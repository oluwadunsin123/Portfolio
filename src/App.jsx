import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function App(){

useEffect(()=>{

ScrollReveal().reveal(

'.hero,.about,.services,.skills,.projects,.testimonials,.contact',

{

distance:"60px",

duration:1800,

delay:200,

origin:"bottom",

reset:false

}

);

},[]);


  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Services/>
     <Skills/>
     <Projects/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
   
  )
}

export default App




