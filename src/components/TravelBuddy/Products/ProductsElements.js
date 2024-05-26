import styled from 'styled-components';

export const ProductContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 4rem calc((100vw - 1300px) / 2);
//   background: #150f0f;
background: #010606;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 1rem 2rem;
  line-height: 2;
  width: 350px;
  display: flex-box;
  align-items: center;
  jsutify-content: center;
`;

export const ProductImg = styled.img`
  height: 300px;
  width: 320px;
  max-width: 100%;
  z-index: 3;
  border-radius:8px;
  transition: all 0.3s ease-out;

  &:hover{
    z-index: 0;
  // // box-shadow: #132626 0px 20px 30px -10px;
  }

`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 300;
  font-size: 1.2rem;
`;

export const ProductFrom=styled.div`
   display: flex;
   justify-content: center;
`


export const ProductInfo = styled.table` 
  height: 300px;
  width: 320px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  position: absolute;
  background: whitesmoke;
  z-index: 0;
  color: #fff;
  border-radius:8px;
  background: #132626;

  &:hover{
  z-index: 3;
  box-shadow: #132626 0px 20px 30px -10px;
  cursor: pointer;
  }
`;


export const ProductBody = styled.tbody`

`

export const ProductList=styled.tr`
   display: flex;
  //  justify-content: start;
   text-align: left;
   align-items: center;
   margin: 0 auto;
`


export const ProductLabel=styled.td`
   display: flex;
   justify-content: start;
`
export const ProductDesc = styled.tr`
  margin-left: 10px;
`;

export const ProductPrice = styled.tr`
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
`;

export const ProductButton = styled.button`
border-radius: 50px;
margin-top: 16px;
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
//   background: #e31837;
// color: #fff;
background: #01bf71;
color: #010606;
  transition: 0.2 ease-out;

  &:hover {
      transition: 0.2s ease-out;
      cursor: pointer;
      background: #fff;
      color: #010606;
    //   background: #ffc500;
    // color: #000;
  }
`;

export const ProductEnd=styled.hr`
  margin: 16px auto;
  width: 280px;
  border: 3px solid #01bf71;
  border-radius: 5px;
`

export const ProductBox=styled.div`
display: flex;
`

export const ProductTravelMain=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  width: 320px;
`


