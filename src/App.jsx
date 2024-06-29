import Deals from "./Components/FixedLayouts/Deals"
import Footer from "./Components/FixedLayouts/Footer"
import Hero from './Components/Hero'
import Nav from "./Components/FixedLayouts/Nav"

function App() {
  return (
    <div className="flex flex-col">
        <Deals />
        <Nav />
        <Hero />
        <Footer />
    </div>
  )
}

export default App
