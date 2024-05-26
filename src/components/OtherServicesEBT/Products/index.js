import React from 'react'
import {
  ProductContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductFrom,
  ProductInfo,
  ProductBody,
  ProductLabel,
  ProductList,
  ProductDesc,
  ProductPrice,
  ProductButton,
  ProductEnd
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
              <ProductInfo>
              <ProductBody>
                <ProductFrom>
                "
                <ProductTitle>{product.from}</ProductTitle>
                <ProductTitle>" - "</ProductTitle>    
                <ProductTitle>{product.dest}</ProductTitle>
                "
                </ProductFrom>

                <ProductList>
                <ProductLabel>Travelling Date  </ProductLabel>
                <ProductDesc>: {product.date}</ProductDesc>
                </ProductList>

                
                <ProductList>
                <ProductLabel>Travelling Time </ProductLabel>
                <ProductDesc>: {product.time}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>No.of Tickets </ProductLabel>
                <ProductDesc>: {product.count}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Contact </ProductLabel>
                <ProductDesc>: {product.contact}</ProductDesc>
                </ProductList>

                {/* <ProductButton>{product.button}</ProductButton> */}
              </ProductBody>
              </ProductInfo>
            </ProductCard>

             )
         })}
      </ProductWrapper>
    </ProductContainer>
  )
}

export default Products