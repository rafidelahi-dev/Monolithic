import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Founder from './Components/Founder'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import DataProvider from './Components/DataProvider'

function App() {
  

  return (
    <>
    <DataProvider>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Founder/>
      <Contact/>
      <Footer/>
    </DataProvider>
    </>
  )
}

export default App
