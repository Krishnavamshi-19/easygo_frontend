import styled from 'styled-components';

export const ProductContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
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
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
//   box-shadow: 6px 6px #01bf71;
`;

export const ProductHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  background: #132626;
  transition: transform .3s ease;



  wdith: 300px;
  // border: 5px solid #01bf71;
  border-radius: 10%;
  margin: 16px auto;
  box-shadow: #132626 0px 20px 30px -10px;
  background: #132626;
  
  &:hover{
    cursor: pointer;
    // transform: translateY(30px);
    transform: scale(1.1);
  }

`;

export const ProductBody = styled.tbody`

`

export const ProductList=styled.tr`
  
`
export const ProductLabel=styled.td`
   justify-content: center;
`
export const ProductDesc = styled.p`
  margin-left: 10px;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;


export const ProductButton = styled.button`
border-radius: 50px;
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

