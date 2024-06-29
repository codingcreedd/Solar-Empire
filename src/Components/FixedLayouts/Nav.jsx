import { useContext } from 'react';
import nav from '../../nav.js';
import {v4 as uuid} from 'uuid'
import {Context} from '../Context.jsx'
import { Link } from 'react-router-dom';


const Nav = () => {

    const {cartCount, cart} = useContext(Context);

  return (
    <nav className="px-80 flex justify-between items-center py-4 fixed mt-7 md:mt-10 md:shadow-2xl md:mx-8 md:rounded-lg z-10 bg-white">
        <img src='https://i.ibb.co/db9qbJh/solarempirelogo.jpg' alt="" border="0" className="w-[3%] cursor-pointer" />
        <div className='flex gap-10'>
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
            <p className={`absolute -top-3 -right-2 font-bold ${cart.length < 1 && 'text-red-600'}`}>{cart.length}</p>
        </div>
    </nav>
  )
}

export default Nav;
