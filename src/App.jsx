import React, { useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Programs from "./components/Programs/Programs"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Testimonials from "./components/Testimonials/Testimonials"
import Contacts from "./components/Contacts/Contacts"
import Footer from "./components/Footer/Footer"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"

function App() {

  const [playState, setPlayState] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subTitle='Our Program'
          title='What We Offer'
        />
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title
          subTitle='Gallery'
          title='Campus Photos'
        />
        <Campus />
        <Title 
          subTitle='TESTIMONIALS'
          title='What Student Says'
        />
        <Testimonials /> 
        <Title 
          subTitle='Contact Us'
          title='Get in Touch'
        />
        <Contacts />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
