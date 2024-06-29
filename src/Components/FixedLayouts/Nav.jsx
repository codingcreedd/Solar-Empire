import { useContext, useState } from 'react';
import nav from '../../nav.js';
import {v4 as uuid} from 'uuid'
import {Context} from '../Context.jsx'
import { Link } from 'react-router-dom';


const Nav = () => {

    const {cart, openMenu, setOpenMenu} = useContext(Context);

  return (
    <nav className="px-80 flex justify-between items-center py-4 max-md:py-2 fixed md:mt-10 md:shadow-2xl md:mx-8 md:rounded-lg z-10 bg-white max-md:px-10 max-md:w-full max-md:sticky max-md:top-0">
        
        <i className='bx bx-menu md:hidden cursor-pointer' onClick={() => {setOpenMenu(!openMenu); console.log(openMenu)}}></i>    
        
        <img src='https://i.ibb.co/db9qbJh/solarempirelogo.jpg' alt="" border="0" className="w-[3%] max-md:w-[20px] cursor-pointer" />
        <div className='flex gap-10 max-md:hidden'>
            {
                nav.map(element => {
                    return <Link className='font-bold cursor-pointer listElement' key={uuid()} to={element.path}>{element.title}</Link>
                })
            }
        </div>

        <div className='relative'>
            <Link to="/cart">
                <i className='bx bx-shopping-bag text-2xl cursor-pointer'></i>
            </Link>
            <p className={`absolute -top-3 -right-2 max-md:text-sm max-md:-top-2 max-md:-right-1 font-bold ${cart.length < 1 && 'text-red-600'}`}>{cart.length}</p>
        </div>
    </nav>
  )
}

export default Nav;
