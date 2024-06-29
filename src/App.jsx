import Deals from "./Components/FixedLayouts/Deals"
import Footer from "./Components/FixedLayouts/Footer"
import Hero from './Components/Hero'
import Nav from "./Components/FixedLayouts/Nav"
import { useContext } from "react"
import { Context } from "./Components/Context"
import MobileMenu from "./Components/MobileMenu"

function App() {
  const { openMenu, setOpenMenu } = useContext(Context);
  
  return (
    <div className={`flex flex-col relative app ${getComputedStyle(document.documentElement).getPropertyValue('--theme') === 'light' ? 'light-mode' : 'dark-mode'}`}>
      <MobileMenu />
      <div className={`${openMenu && 'blur-sm pointer-events-none'}`}>
        <Deals />
        <Nav />
        <Hero />
        <Footer />
      </div>
    </div>
  )
}

export default App
