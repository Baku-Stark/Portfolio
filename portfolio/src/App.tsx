import { LanguageProvider } from "./context/LanguageContext"
import { Footer } from "./components/layout/Footer"
import { LandingPage } from "./components/layout/LandingPage"
import { About } from "./pages/About"
import { Education } from "./pages/Education"
import { Experiences } from "./pages/Experiences"
import { Projects } from "./pages/Projects"
import { LanguageToggleButton } from "./components/ui/LanguageToggleButton"

function App() {
  return (
    <LanguageProvider>
      <main className="main_container relative">
        <LandingPage />
        <About />
        <Projects />
        <Experiences />
        <Education />
        <Footer />

        {/* Floating Language Toggle Button */}
        <LanguageToggleButton />
      </main>
    </LanguageProvider>
  )
}

export default App