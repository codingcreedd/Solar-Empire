import { useState } from "react"
import AddToCartBtn from "../Cart/AddToCartBtn";

export const Element = ({title, children}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-5 max-md:gap-3 cursor-pointer shadow-2xl px-4 py-4 rounded-lg" onClick={() => {setIsOpen(!isOpen)}}>
            <div className="flex justify-between">
                <p className="text-green-600 md:text-xl font-bold">{title}</p>
                {
                    !isOpen ? <i className='bx bx-plus md:text-2xl'></i> : <i className='bx bx-minus md:text-2xl' ></i>
                }
            </div>

            {
                isOpen ? (
                    <div>
                        {children}
                    </div>
                ) : null
            }
        </div>
    )
}


const Product = ({img, name, price, title, lastPrice}) => {

    const [imgNum, setImgNum] = useState(1);

  return (
    <div className="flex flex-col gap-10">
        {
            title ? (
                <h1 className="border bg-green-600 text-white border-green-600 py-4 mx-10 max-md:py-2 max-md:mx-4 max-md:text-2xl max-md:mt-6 max-md:mb-2 rounded-xl text-4xl text-center mt-10 font-bold mb-10 hover:bg-green-600 hover:text-black transition-all hover:-translate-y-4">{title}</h1>
            ) : 
            null
        }
        <div className="flex justify-center gap-20 max-md:gap-6 max-md:flex-col max-md:mx-4 max-md:items-center">
            <img src={img} alt="Blue-Black-Minimalist-Modern-New-Collection-Backpack-Promotion-Instagram-Post-3" border="0" className="w-[600px] rounded-lg max-md:w-[90%]" />
            
            <div className="flex flex-col w-[40%] max-md:w-full">
                <h1 className="text-4xl font-bold md:max-w-[70%] max-md:w-full max-md:text-2xl">{name}</h1>
                <p className="text-lg mt-3 text-gray-400 font-bold max-md:text-sm">Feel the Fresh Air without electricity!</p>

                <div className="flex items-center gap-3 mt-4">
                    <p className="font-bold text-green-600 text-lg max-md:text-sm">${price}</p>
                    <p className="text-gray-500 font-bold text-lg line-through max-md:text-sm">${lastPrice}</p>
                    <div className="text-center text-white bg-green-600 rounded-lg px-2 font-bold text-sm">
                        Free Delivery
                    </div>
                </div>

                <div className="flex gap-5 items-center mt-5 max-md:gap-2">
                    <i className='bx bxs-heart text-2xl text-green-600 max-md:text-sm'></i>
                    <p className="max-md:text-sm">Good Night Sleep</p>
                    <i className='bx bxs-heart text-2xl text-green-600 max-md:text-sm'></i>
                    <p  className="max-md:text-sm">4 Speeds</p>
                    <i className='bx bxs-heart text-2xl text-green-600 max-md:text-sm'></i>
                    <p className="max-md:text-sm">USB Port</p>
                </div>

                <div className="flex gap-5 items-center">
                    <i className='bx bxs-heart text-2xl text-green-600 max-md:text-sm'></i>
                    <p className="max-md:text-sm">LED Light</p>
                    <i className='bx bxs-heart text-2xl text-green-600 max-md:text-sm'></i>
                    <p className="max-md:text-sm">Free Delivery</p>
                </div>
                
                <AddToCartBtn />
                <p className="font-bold mt-4 text-center max-md:text-sm">Cash on Delivery</p>

                <div className="flex flex-col mt-10 max-md:mt-5">
                    <Element title="Returns">
                        <div className="flex gap-4">
                            <div className="w-[5px] bg-green-600"></div>
                            <p className="text-sm max-md:text-[0.8rem]">We'll replace any damaged or defective parts, including broken components and non-functional batteries, if reported within [timeframe, e.g., 30 days] of delivery. Contact us on Whatsapp for issues like this.</p>
                        </div>
                    </Element>

                    <Element title="Specifications">
                        <div className="flex gap-4 text-sm">
                            <div className="w-[5px] bg-green-600"></div>
                            <div className="flex flex-col max-md:text-[0.8rem]">
                                <h1 className="text-2xl font-bold text-center max-md:text-lg">Solar Fan</h1>
                                <p>Power: 25W</p>
                                <p>Battery: Ternary Lithium Battery 18000mah</p>
                                <p>Solar Panel: 9V 20W Polysilicon Panel</p>
                                <p>Working Time: 5~10hours</p>
                                <p>Charge Time: 4-6hours</p>
                                <p>Working Mode: Multi-function button/Remote Controller/LED Night Lamp</p>
                                <p>Finish Color: Black/White</p>
                                <p>Fan Size: 16 ", 120cm higth, 45cm width</p>
                                <p>Solar Panel Size: 400*350mm</p>
                                <p>Charging Method: Adapter Charging/Solar Charging</p>
                            </div>
                        </div>
                    </Element>

                    <Element title="Shipping Details">
                    <div className="flex gap-4 text-sm">
                            <div className="w-[5px] bg-green-600"></div>
                            <p className="max-md:text-[0.8rem]">Shipping is FREE all over Lebanon, you'll pay the shipping agent when they arrive (Cash on Delivery) </p>
                        </div>
                    </Element>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product