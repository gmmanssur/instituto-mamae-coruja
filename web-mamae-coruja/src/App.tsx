import './App.css'
import Navbar from './components/navbar'
import Hero from './pages/hero'
import About from './pages/about'
import Mission from './pages/mission'
import Founder from './pages/founder'
import Donate from './pages/donate'
import Gallery from './pages/gallery'
import Volunteer from './pages/volunteer'
import Footer from './pages/footer'
import WhatsAppWidget from './components/WhatsAppWidget'
import bgImg from "./assets/bg-hero.jpeg";

function App() {
  return (
      <main className='w-full min-h-screen'>
        <Navbar />
        <div style={{backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          <Hero />
          <Gallery />
        </div>
        <Mission />
        <Donate />
        <Founder />
        <About />
        <Volunteer />
        <Footer />
        <WhatsAppWidget />
      </main>
  )
}

export default App
