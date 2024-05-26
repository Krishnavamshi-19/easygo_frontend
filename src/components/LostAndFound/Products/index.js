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
  ProductDesc,
  ProductPrice,
  ProductList,
  ProductLabel,
  ProductButton,
  ProductEnd
} from './NewLNFElements';
// import data from './data';


const Products = ({heading, data}) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
         {data.map((product, index) => {
           return(
            <ProductCard Key={index}>
              <ProductImg src={product.img} alt={product.alt}/>
              <ProductInfo>
                {/* <ProductTitle>{product.name}</ProductTitle> */}
                <ProductBody>
                
                <ProductList>
                <ProductLabel>Name </ProductLabel>
                <ProductDesc>: {product.name}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Lost/Found On </ProductLabel>
                <ProductDesc>: {product.date}</ProductDesc>
                </ProductList>
                
                <ProductList>
                <ProductLabel>Lost/Found At </ProductLabel>
                <ProductDesc>: {product.place}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Lost/Found status </ProductLabel>
                <ProductDesc>: {product.status}</ProductDesc>
                </ProductList>

                <ProductList>
                <ProductLabel>Contact Info </ProductLabel>
                <ProductDesc>: {product.contact}</ProductDesc>
                </ProductList>

                <ProductDesc>{product.description}</ProductDesc>

                {/* <ProductEnd></ProductEnd> */}

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
























// import React from 'react'
// import {
//   ProductContainer,
//   ProductWrapper,
//   ProductHeading,
//   ProductTitle,
//   ProductCard,
//   ProductImg,
//   ProductInfo,
//   ProductDesc,
//   ProductPrice,
//   ProductList,
//   ProductLabel,
//   ProductButton,
//   ProductEnd
// } from './ProductsElements';
// // import data from './data';


// const Products = ({heading, data}) => {
//   return (
//     <ProductContainer>
//       <ProductHeading>{heading}</ProductHeading>
//       <ProductWrapper>
//          {data.map((product, index) => {
//            return(
//             <ProductCard Key={index}>
//               <ProductImg src={product.img} alt={product.alt}/>
//               <ProductInfo>
//                 {/* <ProductTitle>{product.name}</ProductTitle> */}

//                 <ProductList>
//                 <ProductLabel>Name : </ProductLabel>
//                 <ProductDesc>{product.name}</ProductDesc>
//                 </ProductList>

//                 <ProductList>
//                 <ProductLabel>Lost/Found On : </ProductLabel>
//                 <ProductDesc>{product.date}</ProductDesc>
//                 </ProductList>
                
//                 <ProductList>
//                 <ProductLabel>Lost/Found At : </ProductLabel>
//                 <ProductDesc>{product.place}</ProductDesc>
//                 </ProductList>

//                 <ProductList>
//                 <ProductLabel>Lost/Found status : </ProductLabel>
//                 <ProductDesc>{product.status}</ProductDesc>
//                 </ProductList>

//                 <ProductList>
//                 <ProductLabel>Contact Info : </ProductLabel>
//                 <ProductDesc>{product.contact}</ProductDesc>
//                 </ProductList>

//                 <ProductDesc>{product.description}</ProductDesc>

//                 <ProductEnd></ProductEnd>

//                 {/* <ProductButton>{product.button}</ProductButton> */}
//               </ProductInfo>
//             </ProductCard>

//              )
//          })}
//       </ProductWrapper>
//     </ProductContainer>
//   )
// }

// export default Products