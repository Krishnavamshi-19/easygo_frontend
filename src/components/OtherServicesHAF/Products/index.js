import React from 'react'
import {
  ProductContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductBody,
  ProductList,
  ProductLabel,
  ProductDesc,
  ProductPrice,
  ProductEnd,
  ProductButton
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
              {/* <ProductImg src={product.img} alt={product.alt}/> */}
              <ProductInfo>
              <ProductBody>
              <ProductList>
                <ProductLabel>Myself : </ProductLabel>
                <ProductDesc>{product.name}</ProductDesc>
              </ProductList>

              <ProductList>
                <ProductLabel>Contact : </ProductLabel>
                <ProductDesc>{product.contact}</ProductDesc>
              </ProductList>

              <ProductDesc>{product.description}</ProductDesc>
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