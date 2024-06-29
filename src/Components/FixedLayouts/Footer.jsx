const Footer = () => {
  return (
    <footer className="flex flex-col mt-20 w-full bg-green-800 px-14 md:px-40 lg:px-80 text-white pb-10 overflow-hidden">
        <p className="w-full max-md:mt-4 text-[2rem] md:text-[4rem] lg:text-[6rem] text-green-300 font-bold text-center mb-4 md:mb-6">SOLAR EMPIRE</p>
        
        <div className="md:flex md:justify-between max-md:grid max-md:grid-cols-2">
            <div className="flex flex-col md:gap-6 gap-2 max-md:mb-5">
                <div className="flex items-center gap-4 max-md:w-[200px]">
                  <img src="https://i.ibb.co/w0L7cxp/solarempirelogo-removebg-preview.png" alt="solarempirelogo-removebg-preview" border="0" className="w-[5%] max-md:w-[20px] cursor-pointer" />
                  <p className="font-bold md:text-2xl max-md:text-sm">Solar Empire</p>
                </div>

                <p className="max-md:text-sm">The number one solution to your electricity shortcuts's problems in Lebanon.</p>
            </div>

            <div className="flex flex-col gap-6 max-md:gap-2 max-md:mb-5 max-md:ml-auto">
                <h1 className="md:text-2xl font-bold">Products</h1>
                <p className="max-md:text-sm">Solar Fans</p>
                <p className="max-md:text-sm">Small Office Fans</p>
                <p className="max-md:text-sm">Neon Lights</p>
                <p className="max-md:text-sm">Light Bulbs</p>
            </div>

            <div className="flex flex-col gap-6 max-md:gap-2 max-md:mt-5">
                <h1 className="md:text-2xl font-bold">Tools</h1>
                <p className="max-md:text-sm">Pricing</p>
                <p className="max-md:text-sm">Product Description</p>
            </div>

            <div className="flex flex-col gap-6 max-md:gap-2 max-md:ml-auto max-md:mt-5">
                <h1 className="md:text-2xl font-bold">Contact Us</h1>

                <div className="flex items-center gap-4 max-md:gap-2">
                  <i className='bx bxl-whatsapp text-2xl max-md:text-sm'></i>
                  <p className="max-md:text-sm">+961 79 174 386</p>
                </div>

                <div className="flex items-center gap-4 max-md:gap-2">
                  <i className='bx bxl-instagram text-2xl max-md:text-sm' ></i>
                  <p className="max-md:text-sm">solarempire_</p>
                </div>

                <div className="flex items-center gap-4 max-md:gap-2">
                  <i className='bx bxl-facebook-square text-2xl max-md:text-sm' ></i>
                  <p className="max-md:text-sm">Solar Empire</p>
                </div>

            </div>

        </div>

        <div className="flex justify-between border-t border-b py-8 mt-10 mb-10 max-md:flex-col">
            <div className="flex flex-col gap-5">
                <h1 className="font-bold text-2xl max-md:text-xl">Subscribe to our Newsletter</h1>
                <p className="max-md:text-sm max-md:mb-5">Get updated when a we add a new product to our stock!</p>
            </div>



            <div className="flex flex-col gap-4">
                <div className="flex gap-2">
                    <input type="email" className="outline-none rounded-full bg-transparent border px-4 max-md:px-2" />
                    <button className="px-5 py-2 font-bold text-white bg-green-400 rounded-full max-md:px-2 max-md:py-1 max-md:text-sm">Subscribe</button>
                </div>
                
                <p className="w-[500px] text-[0.8rem] max-md:max-w-[99%]">By submitting your email address, you agree to receive Solar Empire's newlestter. For more information, contact us on Whatsapp: +961 76 490 249 or +961 79 174 386</p>
            </div>
        </div>

        <div className="text-center max-md:text-[0.8rem]">
            Copyright &copy; 2024 Solar Empire All rights reserved. Made with Love By Marwan Moubayed
        </div>

    </footer>
  )
}

export default Footer