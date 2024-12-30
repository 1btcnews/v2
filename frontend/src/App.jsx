import {Outlet} from'react-router-dom'
import Navbar from './components/Navbar'
//import { Analytics } from '@vercel/analytics/next';
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
{/*      <Analytics /> */}
     <div className=' min-h-screen flex flex-col bg-slate-300'>
       <Navbar/>
       <div className='flex-grow lol'> <Outlet/> </div>
       <div className='mt-auto lol'><Footer/></div>
     </div>
    </>
  )
}

export default App
