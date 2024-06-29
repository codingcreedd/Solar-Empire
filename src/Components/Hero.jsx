import Product from "./Product/Product"
import products from "../products"
import ProductCard from "./Product/ProductCard"
import {v4 as uuid} from 'uuid'

const Hero = () => {
  return (
    <div className="flex flex-col">
      <img src="https://i.ibb.co/59jJ31v/hero-Banner.jpg" alt="hero-Banner" border="0" className="w-full" />
      <div className="text-center flex flex-col mt-10 items-center gap-6">
        <h1 className="text-4xl font-bold text-green-600 max-md:text-2xl">Welcome to Solar Empire <sup className="text-md max-md:text-sm">TM</sup></h1>
        <p className="md:max-w-[50%] max-md:w-[90%]">Our mission is to empower your home with reliable and sustainable energy solutions, alleviating 
          the frustration of electricity shortages in Lebanon. Our innovative solar power fans are designed 
          to provide a breath of fresh air, literally! By harnessing the power of the sun, our fans ensure a 
          consistent and eco-friendly cooling experience, while reducing your reliance on the grid.</p>
      </div>

      <Product img="https://i.ibb.co/VST6MdH/Blue-Black-Minimalist-Modern-New-Collection-Backpack-Promotion-Instagram-Post-3.png" name="Solar Empire's White / Black Solar Fan"
      price={42} lastPrice={75} title="Top Product"/>

      <h1 className="border bg-green-600 text-white border-green-600 py-4 mx-10 max-md:py-2 max-md:mx-4 max-md:text-2xl max-md:mt-6 max-md:mb-10 rounded-xl text-4xl text-center mt-20 font-bold mb-20 hover:bg-green-600 hover:text-black transition-all hover:-translate-y-4">All Products</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {
          products.map(product => (
            <ProductCard key={uuid()} name={product?.name} tag={<div className="px-2 py-1 bg-green-600 text-white rounded-full text-sm max-md:text-[0.8rem] max-md:py-0">Free Delivery</div>}
            unitPrice={product.unitPrice} lastPrice={product.lastPrice} wholesalePrice={product.wholesalePrice} outOfStock={product.outOfStock}/>
          ))
        }
      </div>
    </div>
  )
}

export default Hero