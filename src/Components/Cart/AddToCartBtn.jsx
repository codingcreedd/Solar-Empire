import { Link } from "react-router-dom"

const AddToCartBtn = ({qty, onClick}) => {
  return (
    <Link className="bg-green-600 mt-10 py-4 rounded-full font-bold text-center text-white w-full"
    onClick={onClick}>Add to Cart</Link>
  )
}

export default AddToCartBtn