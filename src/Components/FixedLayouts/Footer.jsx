const Footer = () => {
  return (
    <footer className="flex flex-col mt-20 w-full bg-green-800 px-80 text-white pb-10">
        <p className="w-full text-[6rem] text-green-300 font-bold text-center mb-6">SOLAR EMPIRE</p>
        
        <div className="flex justify-between">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <img src="https://i.ibb.co/w0L7cxp/solarempirelogo-removebg-preview.png" alt="solarempirelogo-removebg-preview" border="0" className="w-[5%] cursor-pointer" />
                  <p className="font-bold text-2xl">Solar Empire</p>
                </div>

                <p>The number one solution to your electricity shortcuts's problems in Lebanon.</p>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-bold">Products</h1>
                <p>Solar Fans</p>
                <p>Small Office Fans</p>
                <p>Neon Lights</p>
                <p>Light Bulbs</p>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-bold">Tools</h1>
                <p>Pricing</p>
                <p>Product Description</p>
            </div>

            <div className="flex flex-col gap-6">
                <h1 className="text-2xl font-bold">Contact Us</h1>

                <div className="flex items-center gap-4">
                  <i className='bx bxl-whatsapp text-2xl'></i>
                  <p>+961 79 174 386</p>
                </div>

                <div className="flex items-center gap-4">
                  <i className='bx bxl-instagram text-2xl' ></i>
                  <p>solarempire_</p>
                </div>

                <div className="flex items-center gap-4">
                  <i className='bx bxl-facebook-square text-2xl' ></i>
                  <p>Solar Empire</p>
                </div>

            </div>

        </div>

        <div className="flex justify-between border-t border-b py-8 mt-10 mb-10">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl">Subscribe to our Newsletter</h1>
                <p>Get updated when a we add a new product to our stock!</p>
            </div>



            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <input type="email" className="outline-none rounded-full bg-transparent border px-4" />
                    <button className="px-5 py-2 font-bold text-white bg-green-400 rounded-full">Subscribe</button>
                </div>
                
                <p className="w-[500px] text-[0.8rem]">By submitting your email address, you agree to receive Solar Empire's newlestter. For more information, contact us on Whatsapp: +961 76 490 249 or +961 79 174 386</p>
            </div>
        </div>

        <div className="text-center">
            Copyright &copy; 2024 Solar Empire All rights reserved.
        </div>

    </footer>
  )
}

export default Footer