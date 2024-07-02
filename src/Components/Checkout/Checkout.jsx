import { useContext } from "react"
import Deals from "../FixedLayouts/Deals"
import Footer from "../FixedLayouts/Footer"
import Nav from "../FixedLayouts/Nav"
import MobileMenu from "../MobileMenu"
import { Context } from "../Context"
import {v4 as uuid} from 'uuid'
import Form from "./Form"

const Checkout = () => {
    

    const {cart, totalAmount, formState} = useContext(Context);

    if(formState.error){
        return <Error />
    }

  return (
    <div className="flex flex-col overflow-hidden border-t">
        <MobileMenu />
        <Deals />
        <Nav />
        {
            formState.loading ? (
                <div className="flex items-center justify-center bg-white p-20 mt-20">
                    <div className="w-6 h-6 border-4 border-gray-300 rounded-full animate-spin border-t-green-600" />
                </div>
            ) : (
                <div className="px-80 flex mt-28 border-t border-t-black">
                    <div className="flex flex-col px-10 py-10 border-b border-b-black">
                        <Form />
                    </div>

                    <div className="flex flex-col bg-gray-200 px-10 w-full border-l-black border-l py-10 border-b border-b-black">
                        <div className="flex flex-col gap-4">
                            {
                                cart.map(product => (
                                    <div className="flex items-center" key={uuid()}>
                                        <div className="mr-5">
                                            <img src={product.src} alt="Ordered Product" className="w-[60px] h-[60px] relative rounded-lg" />
                                            <div className="absolute w-[7px] h-[7px] rounded-full bg-green-600 flex items-center justify-center -top-2 -right-2">{product.qty}</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <p>{product.name}</p>
                                            <p className="text-sm text-gray-400">{product.description}</p>
                                        </div>
                                        <p className="ml-auto font-bold">${product.unitPrice * product.qty}</p>
                                    </div>
                                ))
                            }

                            <div className="flex flex-col mt-6">
                                <div className="flex justify-between items-center mb-5">
                                    <p>Subtotal</p>
                                    <p>${totalAmount}</p>
                                </div>

                                <div className="flex justify-between items-center mb-5">
                                    <p>Shipping</p>
                                    <p>$0</p>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p className="font-bold text-2xl">Total</p>
                                    <p className="font-bold text-2xl">${totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        <Footer />
    </div>
  )
}

export default Checkout