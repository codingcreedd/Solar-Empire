import Deals from "./FixedLayouts/Deals"
import Footer from "./FixedLayouts/Footer"
import Nav from "./FixedLayouts/Nav"
import MobileMenu from "./MobileMenu"

const Checkout = () => {
  return (
    <div className="flex flex-col">
        <MobileMenu />
        <Deals />
        <Nav />
        <div className="px-80 flex">
            <div className="flex flex-col px-10 py-5">
                <h1>Delivery</h1>
            </div>

            <div>

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout