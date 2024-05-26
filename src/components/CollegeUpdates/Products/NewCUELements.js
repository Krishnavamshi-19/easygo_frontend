import styled from 'styled-components';

export const ProductContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
//   background: #150f0f;
background: #010606;
  color: #fff;
`;


export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;


export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin: 0 auto;

// @media screen and (max-width: 1200px){
//     display: block;
// }

`

export const ProductCard = styled.div`
display: flex;
flext-direction: column;
max-width: 45%;
margin: 0.8rem 1.5rem;
padding: 1rem;
background: #132626;
box-shadow: #132626 0px 20px 30px -10px;
border-radius: 10%;
transition: transform .3s ease;
// max-width: 50vw;

&:hover{
  cursor: pointer;
  // transform: translateY(30px);
  transform: scale(1.1);
}

@media screen and (max-width: 1200px){
    width: 1100px;
}

`

export const ProductImage=styled.div`
`

export const ProductImg = styled.img`
   height: 280px;
   width: 280px;
   margin: 0.5rem 0.8rem;
`

export const ProductInfo = styled.div`
   margin: auto 1rem;
   max-height: 350px;
   width: 100%;
`

export const ProductTitle = styled.h2`
font-size: 20px;
`

export const ProductList=styled.div`
display: felx;
flex-direction: column;
`

export const ProductLabel=styled.div`
color: #88e2bd;
`

export const ProductDesc=styled.div`
`

export const ProductEnd=styled.hr`
`




// max width 1450
// max width 1050