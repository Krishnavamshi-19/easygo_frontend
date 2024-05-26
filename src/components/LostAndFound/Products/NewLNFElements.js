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
  height: 250px;
  width: 320px;
  display: flex;
  margin: 10px;
  box-shadow: #132626 0px 20px 30px -10px;
  border-radius: 8%;
  
  // max-width: 100%;
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
width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  text-align: center;
  box-shadow: #132626 0px 20px 30px -10px;
  background: #132626;
  border-radius: 10%;

`;


export const ProductBody = styled.tbody`

`

export const ProductList=styled.tr`
   text-align: left;
`
export const ProductLabel=styled.td`
color:#88e2bd;

`
export const ProductDesc = styled.p`
font-family: poppins;
font-size: 16px;
  margin-left: 10px;
  justify-content: center;
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


export const ProductEnd=styled.hr`
//   margin: 16px auto;
//   width: 280px;
//   border: 3px solid #01bf71;
//   border-radius: 5px;
//   visible: transparent;
`
