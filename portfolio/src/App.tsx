import { Footer } from "./components/layout/Footer"
import { LandingPage } from "./components/layout/LandingPage"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"

function App() {
  return (
    <>
      <section className="main_container">
        <LandingPage/>
        {/* Sections About, Projects n Experiences Here */}
        <About/>
        <Projects/>
        <Footer/>
      </section>
    </>
  )
}

export default App
