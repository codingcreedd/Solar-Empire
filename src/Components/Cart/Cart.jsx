import Nav from "../FixedLayouts/Nav"
import Footer from '../FixedLayouts/Footer';
import Deals from '../FixedLayouts/Deals'
import { useContext } from "react";
import { Context } from "../Context";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu";

const Cart = () => {

    const {cart, totalAmount} = useContext(Context);

  return (
    <div className="flex flex-col">
        <MobileMenu />
        <Deals />
        <Nav />

        <div className="flex flex-col px-80 md:mt-20 max-md:px-14">
            <h1 className="text-5xl font-bold mb-5 max-md:mb-3 mt-10 textcen max-md:mt-5 max-md:text-2xl">Your Cart</h1>
            <p className="mb-10 max-md:mb-5">You are eligible for FREE shipping!</p>

            <div className="flex gap-10 max-md:flex-col">
                <div className="flex flex-col gap-5 flex-grow">
                    {
                        cart.map(product => (
                            <div className="flex px-4">
                                <img src={product.src} alt="product image" border="0" className="w-[100px] h-[100px] rounded-xl mr-10" />

                                <div className="flex flex-col">
                                        <h1 className="font-bold text-lg max-md:text-sm">{product.name}</h1>
                                        <div className="text-lg max-md:text-sm">Quantity: {product.qty}</div>
                                </div>

                                <div className="flex flex-col gap-2 ml-auto">
                                    <p className="font-bold max-md:text-sm">Total</p>
                                    <p className="text-green-600 font-bold max-md:text-sm">${(product.unitPrice * product.qty)}</p>
                                    <p className="text-gray-500 font-bold line-through max-md:text-sm">${(product.lastPrice * product.qty)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                <div className="flex flex-col w-[30%] max-md:w-full">
                    <h1 className="text-3xl font-bold mb-8 max-md:text-2xl max-md:mb-4">Summary</h1>
                    <p className="mb-4 max-md:text-sm">Do you have a Promo Code?</p>
                    <div className="flex items-center justify-between mb-4">
                        <p className="max-md:text-sm">Estimated Shipping & Handling</p>
                        <p className="max-md:text-sm">Free</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="max-md:text-sm">Estimated Tax</p>
                        <p className="max-md:text-sm">-</p>
                    </div>
                    <hr className="h-[2px] bg-gray-400 mt-10 mb-10 max-md:mt-5 max-md:mb-5"/>
                    <div className="flex items-center justify-between">
                        <p className="font-bold">Total</p>
                        <p className="max-md:text-sm font-bold">${totalAmount ? totalAmount : '0'}</p>
                    </div>
                    <hr className="h-[2px] bg-gray-400 mt-10 mb-10 max-md:mt-5 max-md:mb-5"/>
                    <Link className="w-full bg-green-600 hover:opacity-40 transition-all text-white font-bold py-4 rounded-full md:mb-4 text-center
                    max-md:py-2 max-md:text-sm" to="/checkout">
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