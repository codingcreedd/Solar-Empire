import Deals from "./FixedLayouts/Deals"
import Footer from "./FixedLayouts/Footer"
import Nav from "./FixedLayouts/Nav"
import MobileMenu from "./MobileMenu"

const OurStory = () => {
  return (
    <div className="flex flex-col items-center">
        <MobileMenu />
        <Deals />
        <Nav />
        <div className="flex-grow flex flex-col mt-40 max-md:mt-24 items-center">
            <h1 className="text-7xl font-bold mb-10 max-md:text-4xl">Our Story</h1>
            <p className="w-[50%] max-md:w-[75%]">Growing up in Lebanon, we're all too familiar with the frustration of frequent power outages. The sweltering summer nights, spent sweating in the dark, waiting for the electricity to come back on. But it was in those moments of darkness that our idea was born. We realized that there had to be a better way - a way to harness the abundant sunlight and turn it into a reliable source of energy. And so, our solar energy business was born. We started with simple, yet game-changing solutions like solar-powered fans that kept us cool on those hot summer nights, and neon lights that lit the way when the electricity failed. Today, we're dedicated to bringing clean, sustainable energy to our community, one solar panel at a time.</p>
            <div className="flex items-center gap-6 justify-center mt-10 max-md:flex-col max-md:mx-14">
                <img src="https://i.ibb.co/HVhkfXR/Whats-App-Image-2024-06-22-at-1-25-33-PM.jpg" alt="Whats-App-Image-2024-06-22-at-1-25-33-PM" border="0" className="w-[20%] rounded-xl max-md:w-full" />
                <div className="w-[2rem] h-[2rem] max-md:w-[1rem] max-md:h-[1rem] rounded-full bg-green-600"></div>
                <img src="https://i.ibb.co/8PQLmGn/Whats-App-Image-2024-06-22-at-10-42-39-PM.jpg" alt="Whats-App-Image-2024-06-22-at-10-42-39-PM" border="0" className="w-[20%] rounded-xl max-md:w-full"/>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default OurStory