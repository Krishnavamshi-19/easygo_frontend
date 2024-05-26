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
  width: 450px;
`;

export const ProductImg = styled.img`
  display:flex;
  align-items: center;
  margin: auto;
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

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductList=styled.div`
   display: flex;
  //  justify-content: start;
   text-align: left;
   align-items: center;
   margin: 0 auto;
`

export const ProductLabel=styled.h5`
   display: flex;
   justify-content: start;
`
export const ProductDesc = styled.p`
  margin-left: 10px;
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


export const ProductEnd=styled.hr`
  margin: 16px auto;
  width: 280px;
  border: 3px solid #01bf71;
  border-radius: 5px;
`

