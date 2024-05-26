import React,{useState} from 'react'

import {
  ProductContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductBox,
  ProductImg,
  ProductInfo,
  ProductFrom,
  ProductBody,
  ProductTravelMain,
  ProductList,
  ProductLabel,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from './ProductsElements';
// import data from './data';
import "./productstyles.css"

const Products = ({heading, data}) => {

  const [activeCards, setActiveCards] = useState(Array(data.length).fill(false));

  const handleFlip = (index) => {
    setActiveCards((prev) => {
      const newActiveCards = [...prev];
      newActiveCards[index] = !newActiveCards[index];
      return newActiveCards;
    });
  };

  return (
    <React.Fragment>
    <main>

    <div className='ProductContainer'>
    < h1 className='ProductHeading'>{heading}</h1>
      <div className='ProductWrapper'>
         {data.map((product, index) => {
          // const isActiveCard = index === activeCardIndex;
          const isActiveCard = activeCards[index];
          
           return(
            <div className='ProductCard' Key={index}>
              <div className='ProductTravelMain'>
                <tr className='ProductList'>
                  "
                <h2 className='ProductTitle'>{product.from} </h2>
                " - "
                <h2 className='ProductTitle'> {product.dest}</h2>
                "
                </tr>
              </div>
              
              {/* <div 
              onClick={handleFlip}
              className={`ProductBox card ${activeCard ? 'cardFlip' : '' } `}> */}

              <div
                  onClick={() => handleFlip(index)}
                  className={`ProductBox card ${isActiveCard ? 'cardFlip' : ''}`}
                  >

         
              <div className='front'>
              <img className='ProductImg' src={product.img} alt={product.alt}/>
              </div>

              {/* <table className='ProductInfo back'> */}

              <table className={`ProductInfo back ${isActiveCard ? 'cardFlip' : ''}`}>

                <div className='ProductTravelMain'>
                <div className='ProductFrom'>
                
                <tr className='ProductList'>
                  "
                <h2 className='ProductTitle'>{product.from} </h2>
                " - "
                <h2 className='ProductTitle'> {product.dest}</h2>
                "
                </tr>
                
                </div>
                </div>

              <tbody>

                <tr className='ProductList'>
                <td className='ProductLabel'>Travelling On </td>
                <td className='Productdesc'>: {product.date}</td>
                </tr>

                <tr className='ProductList'>
                <td className='ProductLabel'>Vehicle Type</td>
                <td className='Productdesc'>: {product.vtype}</td>
                </tr>

                <tr className='ProductList'>
                <td className='ProductLabel'>Vehiclenum</td>
                <td className='Productdesc'>: {product.vnumber}</td>
                </tr>

                <tr className='ProductList'>
                <td className='ProductLabel'>contact</td>
                <td className='Productdesc'>: {product.contact}</td>
                </tr>
             
                <tr className='ProductList'>
                <td className='ProductLabel'>Total Fare</td>
                <td className='Productdesc'>: ₹ {product.fare}</td>
                </tr>
                

                {/* <ProductPrice>Rs.{produc}</ProductPrice> */}


                {/* <ProductList> */}
                <tr className='ProductDesc'> Got {product.buddies} buddies till now !</tr>
                {/* </ProductList> */}

              </tbody>


                {/* <ProductButton>{product.button}</ProductButton> */}
              </table>

              </div>

            </div>

             )
         })}
        </div>
        </div>

        </main>
        </React.Fragment>
  )
}

export default Products