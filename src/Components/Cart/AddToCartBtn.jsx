import { Link } from "react-router-dom"

const AddToCartBtn = ({qty, onClick}) => {
  return (
    <Link className="bg-green-600 mt-10 py-4 rounded-full font-bold text-center text-white w-full max-md:mt-5 max-md:py-2 max-md:text-sm"
    onClick={onClick}>Add to Cart</Link>
  )
}

export default AddToCartBtn