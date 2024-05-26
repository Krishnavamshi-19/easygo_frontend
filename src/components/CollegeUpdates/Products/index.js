import React from 'react'
import {
  ProductContainer,
  ProductWrapper,
  ProductHeading,
  ProductTitle,
  ProductCard,
  ProductImage,
  ProductImg,
  ProductInfo,
  ProductLabel,
  ProductList,
  ProductDesc,
  ProductPrice,
  ProductEnd,
  ProductButton
} from './NewCUELements';



// import {
//   ProductContainer,
//   ProductWrapper,
//   ProductHeading,
//   ProductTitle,
//   ProductCard,
//   ProductImage,
//   ProductImg,
//   ProductInfo,
//   ProductLabel,
//   ProductList,
//   ProductDesc,
//   ProductPrice,
//   ProductEnd,
//   ProductButton
// } from './ProductsElements';
// import data from './data';


const Products = ({heading, data}) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
         {data.map((product, index) => {
           return(
            <ProductCard Key={index}>

              <ProductImage>
              <ProductImg src={product.img} alt={product.alt}/>
              </ProductImage>

              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>

                <ProductList>
                <ProductLabel>College : </ProductLabel>
                <ProductDesc>{product.college}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>College : </ProductLabel>
                <ProductDesc>{product.college}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Event On : </ProductLabel>
                <ProductDesc>{product.date}</ProductDesc>
                </ProductList>

                <ProductDesc>{product.description}</ProductDesc>
                 
                <ProductList>
                <ProductLabel>Contact : </ProductLabel>
                <ProductDesc>{product.contact}</ProductDesc>
                </ProductList>

                {/* <ProductEnd></ProductEnd> */}

                {/* <ProductButton>{product.button}</ProductButton> */}

              </ProductInfo>
            </ProductCard>

             )
         })}
      </ProductWrapper>
    </ProductContainer>
  )
}

export default Products