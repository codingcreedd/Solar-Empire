import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './Components/Context.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Components/Contact.jsx'
import OurStory from './Components/OurStory.jsx'
import Pricing from './Components/Pricing.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Checkout from './Components/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: 'contact',
    element: <Contact />,
    errorElement: <Error />
  },
  {
    path: 'ourstory',
    element: <OurStory />,
    errorElement: <Error />
  },
  {
    path: 'pricing',
    element: <Pricing />,
    errorElement: <Error />
  },
  {
    path: 'cart',
    element: <Cart />,
    errorElement: <Error />
  },
  {
    path: 'checkout',
    element: <Checkout />,
    errorElement: <Error />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
       <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>,
)
