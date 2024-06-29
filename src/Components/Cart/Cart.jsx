import Nav from "../FixedLayouts/Nav"
import Footer from '../FixedLayouts/Footer';
import Deals from '../FixedLayouts/Deals'
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, cartTotal} = useContext(Context);

  return (
    <div className="flex flex-col">
        <Deals />
        <Nav />

        <div className="flex flex-col px-80 mt-20">
            <h1 className="text-5xl font-bold mb-5 mt-10 textcen">Your Cart</h1>
            <p className="mb-10">You are eligible for FREE shipping!</p>

            <div className="flex gap-10">
                <div className="flex flex-col gap-5 flex-grow">
                    {
                        cart.map(product => (
                            <div className="flex px-4">
                                <img src={product.src} alt="product image" border="0" className="w-[100px] h-[100px] rounded-xl mr-10" />

                                <div className="flex flex-col">
                                        <h1 className="font-bold text-lg">{product.name}</h1>
                                        <div className="text-lg">Quantity: {product.qty}</div>
                                </div>

                                <div className="flex flex-col gap-2 ml-auto">
                                    <p className="font-bold">Total</p>
                                    <p className="text-green-600 font-bold">${(product.unitPrice * product.qty)}</p>
                                    <p className="text-gray-500 font-bold line-through">${(product.lastPrice * product.qty)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                <div className="flex flex-col w-[30%]">
                    <h1 className="text-3xl font-bold mb-8">Summary</h1>
                    <p className="mb-4">Do you have a Promo Code?</p>
                    <div className="flex items-center justify-between mb-4">
                        <p>Estimated Shipping & Handling</p>
                        <p>Free</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Estimated Tax</p>
                        <p>-</p>
                    </div>
                    <hr className="h-[2px] bg-gray-400 mt-10 mb-10"/>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Total</p>
                        <p>{cartTotal ? cartTotal : '$0'}</p>
                    </div>
                    <hr className="h-[2px] bg-gray-400 mt-10 mb-10"/>
                    <Link className="w-full bg-green-600 hover:opacity-40 transition-all text-white font-bold py-4 rounded-full mb-4 text-center">
                        Checkout
                    </Link>
                </div>

            </div>

        </div>

        <Footer />
    </div>
  )
}

export default Cart