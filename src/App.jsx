

import './App.css'
import { BgAnimation } from './assets/Components/BgAnimation'
import { Contact } from './assets/Components/Contact'
import { Footer } from './assets/Components/Footer'
import { Hero } from './assets/Components/Hero'
import { Navbar } from './assets/Components/Navbar'
import { Projects } from './assets/Components/Projects'

function App() {
  

  return (
    <div className='container'>
    <Navbar></Navbar>
    <Hero></Hero>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    <BgAnimation>
    </BgAnimation>
      
    </div>
  )
}

export default App
