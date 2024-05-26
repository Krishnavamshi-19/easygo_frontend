import React from 'react'

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


const Products = ({heading, data}) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
         {data.map((product, index) => {
           return(
            <ProductCard Key={index}>
              <ProductTravelMain>
                <ProductList>
                  "
                <ProductTitle>{product.from} </ProductTitle>
                " - "
                <ProductTitle> {product.dest}</ProductTitle>
                "
                </ProductList>
              </ProductTravelMain>
              
              <ProductBox>
              <ProductImg src={product.img} alt={product.alt}/>
              
              <ProductInfo>

                <ProductTravelMain>
                <ProductFrom>
                "
                <ProductTitle>{product.from}</ProductTitle>
                <ProductTitle>" - "</ProductTitle>    
                <ProductTitle>{product.dest}</ProductTitle>
                "
                </ProductFrom>
                </ProductTravelMain>

              <ProductBody>

                <ProductList>
                <ProductLabel>Travelling On </ProductLabel>
                <ProductDesc>: {product.date}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Vehicle Type </ProductLabel>
                <ProductDesc>: {product.vtype}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Vehiclenum </ProductLabel>
                <ProductDesc>: {product.vnumber}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>contact </ProductLabel>
                <ProductDesc>: {product.contact}</ProductDesc>
                </ProductList>
                
                <ProductList>
                <ProductLabel>Total Fare </ProductLabel>
                <ProductDesc>: ₹ {product.fare}</ProductDesc>
                </ProductList>

                {/* <ProductPrice>Rs.{produc}</ProductPrice> */}


                {/* <ProductList> */}
                <ProductDesc> Got {product.buddies} buddies till now !</ProductDesc>
                {/* </ProductList> */}

              </ProductBody>


                {/* <ProductButton>{product.button}</ProductButton> */}
              </ProductInfo>

              </ProductBox>
            </ProductCard>

             )
         })}
      </ProductWrapper>
    </ProductContainer>
  )
}

export default Products