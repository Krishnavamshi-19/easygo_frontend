import React,{ useState }  from 'react'
import Footer from '../Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Products from './Products';
import productData from './Products/data';

const OtherServicesHAF = () => {
  const [isOpen,setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <>
  <Sidebar isOpen={isOpen} toggle={toggle}/>
  <Navbar toggle={toggle} />
  <Products heading="Help A Friend" data={productData}/>
  <Footer/>
  </>   
  )
}   

export default OtherServicesHAF;