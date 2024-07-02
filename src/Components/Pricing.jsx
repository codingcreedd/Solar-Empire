import Deals from "./FixedLayouts/Deals"
import Nav from "./FixedLayouts/Nav"
import Footer from "./FixedLayouts/Footer"
import products from "../products"
import { useContext } from "react"
import { Context } from "./Context"
import MobileMenu from "./MobileMenu"

const Pricing = () => {
  const productsInTable = [
    { name: "White/Black Solar Fan" },
    { name: "Mini Solar Fan" },
  ]

  const missingProducts = products.filter(
    (product) =>!productsInTable.some((p) => p.name === product.name)
  )

  const {setOpenMenu} = useContext(Context);


  return (
    <div className="flex flex-col items-center overflow-hidden">
      <MobileMenu />
      <Deals />
      <Nav />
      <div className="flex-grow flex flex-col mt-40 items-center max-md:mt-24 max-md:px-14">
        <h1 className="text-7xl font-bold mb-10 max-md:text-4xl">Pricing</h1>
        <div className="container mx-auto p-8 pt-12 md:p-12 lg:p-24 bg-white shadow-2xl border border-black rounded">
          <table className="w-full table-auto border-collapse md:w-auto">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="px-4 py-2 text-lg font-bold md:w-1/4 max-md:text-sm">Product</th>
                <th className="px-4 py-2 text-lg font-bold md:w-1/4 max-md:text-sm">Single</th>
                <th className="px-4 py-2 text-lg font-bold md:w-1/4 max-md:text-sm">Offer</th>
                <th className="px-4 py-2 text-lg font-bold md:w-1/4 max-md:text-sm">Wholesale</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">
                  Solar Fans (White & Black)
                </td>
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">$42</td>
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">
                  2 for $80
                </td>
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">
                  <ul className="list-none mb-0">
                    <li className="text-sm">3 for $100</li>
                    <li className="text-sm">6 for $195</li>
                    <li className="text-sm">8 for $250</li>
                    <li className="text-sm">11 for $335</li>
                    <li className="text-sm">14 for $420</li>
                    <li className="text-sm">17 for $500</li>
                    <li className="text-sm">20 for $580</li>
                    <li className="text-sm">23 for $655</li>
                  </ul>
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">Mini Solar Fan</td>
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">$22</td>
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">2 for $40</td>
                <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">$18/pc</td>
              </tr>
              {missingProducts.map((product) => (
                <tr key={product.name} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">
                    {product.name}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">
                    ${product.unitPrice}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">
                    {product.wholesalePrice}
                  </td>
                  <td className="px-4 py-2 border-b border-gray-200 md:w-1/4 max-md:text-sm">
                    {product.lastPrice}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-600 mt-4">* Free Delivery on all orders</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Pricing