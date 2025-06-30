import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import StatsSection from './components/StatsSection'
import ConsultationSection from './components/ConsultationSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      
      <Hero />
      <StatsSection/>
      <Services />
      <ConsultationSection/>
      <About />
      
      <FAQ />
      <Contact />
      <Footer/>
    </>
  )
}
