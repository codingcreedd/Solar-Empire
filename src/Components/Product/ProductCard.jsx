import { useCallback, useContext, useMemo, useState } from "react"
import AddToCartBtn from "../Cart/AddToCartBtn"
import { Context } from "../Context";

const ProductCard = ({src="https://i.ibb.co/VST6MdH/Blue-Black-Minimalist-Modern-New-Collection-Backpack-Promotion-Instagram-Post-3.png", name, description, unitPrice, lastPrice, wholesalePrice,  tag, outOfStock}) => {

  const [count, setCount] = useState(0);
  const {cart, setCart, totalAmount, setTotalAmount} = useContext(Context);

  const handleAddToCart = () => {
    if (count > 0) {
      const existingProductIndex = cart.findIndex((product) => product.name === name);
      let newCart;
      let newTotalAmount = totalAmount;

      if (existingProductIndex > -1) {
        newCart = [...cart];
        const existingProduct = newCart[existingProductIndex];
        newTotalAmount += (count * unitPrice);
        existingProduct.qty += count;
      } else {

        const newProduct = {
          src, name, description, unitPrice, lastPrice, wholesalePrice, tag, outOfStock, qty: count
        };
        newCart = [...cart, newProduct];
        newTotalAmount += (count * unitPrice);
      }

      setCart(newCart);
      setTotalAmount(newTotalAmount);
      setCount(0);
    }
  }

  return (
    <div className="px-4 pt-4 pb-8 max-md:px-3 max-md:pt-3 max-md:pb-5 flex flex-col bg-white rounded-xl w-[400px] max-md:w-[90%] items-center border shadow-2xl cursor-pointer">
        <div className="flex justify-between items-center w-full">
            <div>
              {
                tag ? (
                  tag
                ) : null
              }
            </div>

            <i className='bx bx-bookmark text-2xl max-md:text-lg'></i>
        </div>

        <img src={src} alt="Product Card" border="0" className="w-full mt-3 mb-10 rounded-lg max-md:mb-5"/>

        <h1 className="font-bold text-2xl mb-5 max-md:text-lg max-md:mb-3">{name}</h1>

        <p className="text-gray-400 text-sm">{description}</p>

        <div className="flex items-center gap-5 max-md:gap-3">
          <p className="font-bold text-2xl max-md:text-lg">${unitPrice}</p>
          <p className="text-gray-500 line-through text-xl max-md:text-sm">${lastPrice}</p>
        </div>

        <div className="w-full border border-green-600 text-center mt-4 py-3 rounded-lg max-md:mt-3 max-md:py-2 max-md:text-sm">
            Wholesale Price: ${wholesalePrice}
        </div>
        
        <div className="flex items-center gap-4 mt-10 max-md:mt-5">
              <button className="px-5 font-bold py-2 rounded-full bg-green-300 max-md:px-3 max-md:py-1" onClick={() => {if(count >= 1){setCount(count - 1)}}}>
                -
              </button>
              <p>{count}</p>
              <button className="px-5 font-bold py-2 rounded-full bg-green-300 max-md:px-3 max-md:py-1" onClick={() => {setCount(count + 1)}}>
                +
              </button>
        </div>

        <AddToCartBtn qty={count} onClick={handleAddToCart}/>
        
    </div>
  )
}

export default ProductCard
