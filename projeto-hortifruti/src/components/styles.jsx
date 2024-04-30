import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;           
     }

     body{
        background-color: #f66000;
     }
`;


export const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

export const Produtos = styled.div`
  width: 50%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  h1 {
    color: white;
    font-size: 3rem;
    font-weight: 200;
    width: 31.9vw;
    text-align: center;
  }

  h2 {
    color: white;
    font-size: 3rem;
    font-weight: 200;
    width: 31.9vw;
    text-align: center;
  }
`;

export const BoxItem = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    width: 20%;
    border-radius: 10px;
    cursor: pointer;
    margin: 0.5rem;
  }
`;

export const Carrinho = styled.div`
  background-color: #f7e0ce;
  border-radius: 120px;
  width: 27.5%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Compras = styled.div`
  width: 22.2vw;
  height: 48vh;
  background-color: #d3c5bb;
  border-radius: 80px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  img {
    width: 10vw;
    border-radius: 10px;
  }

  p {
    width: 12vw;
    height: 7vh;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    font-size: 1.1rem;
  }
`;

export const Quantidades = styled.div`
  width: 12vw;
  height: 7vh;
  border-radius: 100px;
  background-color: #d3c5bb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  button {
    border-radius: 100px;
    width: 30px;
    height: 30px;
    border: solid 1px;
    font-size: 1.5rem;
    background-color: #d3c5bb;
    cursor: pointer;
  }
`;

