import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import FAQSection from '../components/Faq'
import Enquiry from '../components/Enquiry'
import Footer from '../components/Footer'
import ChatBot from '../components/Chatbot'

const Homepage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Enquiry/>
    <FAQSection/>
    <Footer/>
    <ChatBot/>
    </>
  )
}

export default Homepage