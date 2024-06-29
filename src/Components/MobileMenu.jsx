import React, { useContext } from 'react'
import { Context } from './Context'
import nav from '../nav';
import {v4 as uuid} from 'uuid'
import { Link } from 'react-router-dom';

const MobileMenu = () => {

    const {openMenu, setOpenMenu} = useContext(Context);

  return (
    <div>
        {
            openMenu ? (
            <div className={`flex flex-col md:hidden items-center h-screen py-10 px-20 absolute bg-white z-20 left-0`}>
                <i className='bx bx-x cursor-pointer text-2xl' onClick={() => { setOpenMenu(!openMenu) }}></i>
                <div className="flex flex-col gap-10 items-center mt-20 font-bold">
                {
                    nav.map(element => (
                    <Link key={uuid()} to={element.path} onClick={() => {setOpenMenu(false)}}>{element.title}</Link>
                    ))
                }
                </div>
            </div>
            ) : null
        }
    </div>
  )
}

export default MobileMenu