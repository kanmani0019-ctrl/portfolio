import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useTheme from './hooks/useTheme'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const { theme, toggle } = useTheme()
  useScrollReveal()

  return (
    <>
      <a href="#home" className="sr-only">
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
