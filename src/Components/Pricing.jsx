import Deals from "./FixedLayouts/Deals"
import Nav from "./FixedLayouts/Nav"
import Footer from "./FixedLayouts/Footer"

const Pricing = () => {
  return (
    <div className="flex flex-col items-center">
        <Deals />
        <Nav />
        <div className="flex-grow flex flex-col mt-40 items-center">
            <h1 className="text-7xl font-bold mb-10">Pricing</h1>
            <div className="container mx-auto p-8 pt-12 md:p-12 lg:p-24 bg-white shadow-2xl border border-black rounded">

      <table className="w-full table-auto border-collapse">

        <thead>

          <tr className="bg-green-600 text-white">

            <th className="px-8 py-4 text-lg font-bold">Product</th>

            <th className="px-8 py-4 text-lg font-bold">Single</th>

            <th className="px-8 py-4 text-lg font-bold">Offer</th>

            <th className="px-8 py-4 text-lg font-bold">Wholesale</th>

          </tr>

        </thead>

        <tbody>

          <tr className="hover:bg-gray-100">

            <td className="px-8 py-6 border-b border-gray-200">Solar Fans (White & Black)</td>

            <td className="px-8 py-6 border-b border-gray-200">$42</td>

            <td className="px-8 py-6 border-b border-gray-200">2 for $80</td>

            <td className="px-8 py-6 border-b border-gray-200">

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

            <td className="px-8 py-6 border-b border-gray-200">Mini Solar Fan</td>

            <td className="px-8 py-6 border-b border-gray-200">$22</td>

            <td className="px-8 py-6 border-b border-gray-200">2 for $40</td>

            <td className="px-8 py-6 border-b border-gray-200">$18/pc</td>

          </tr>

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