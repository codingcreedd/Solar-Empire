import Deals from "./FixedLayouts/Deals"
import Footer from "./FixedLayouts/Footer"
import Nav from "./FixedLayouts/Nav"
import MobileMenu from "./MobileMenu"

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
        <MobileMenu />
        <Deals />
        <Nav />
        <div className="flex-grow flex flex-col mt-40">
            <h1 className="text-7xl font-bold mb-10">Contact</h1>
            <div className="flex items-center gap-8">
                <div className="flex flex-col gap-2">
                    <h1>Name</h1>
                    <input type="text" name="name"  className="px-6 py-4 rounded-xl bg-gray-200 outline-none" placeholder="Name"/>
                </div>
                
                <div className="flex flex-col gap-2">
                    <h1>Email <sup> *</sup></h1>
                    <input type="email" name="email" required  className="px-6 py-4 rounded-xl bg-gray-200 outline-none" placeholder="Email"/>
                </div>
            </div>

            <div className="flex flex-col gap-2 mt-10">
                <h1>Phone Number <sup> *</sup></h1>
                <input type="text" name="number" required className="px-6 py-4 rounded-xl bg-gray-200 outline-none" placeholder="Phone Number"/>
            </div>

            <div className="flex flex-col gap-2 mt-10">
                <h1>Message <sup> *</sup></h1>
                <textarea name="message" id="message" cols="30" rows="5" required className="px-6 py-4 rounded-xl bg-gray-200 outline-none" placeholder="Message"></textarea>
            </div>

            <button className="mt-10 px-5 py-4 bg-green-600 w-[20%] text-white font-bold rounded-xl">Send</button>
        </div>
        <Footer />
    </div>
  )
}

export default Contact