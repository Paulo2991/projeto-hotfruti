import * as S from "./styles.jsx";
import alface from "../assets/alface.jpg";
import laranja from "../assets/laranja.jpg";
import cereja from "../assets/cereja.png";
import cenoura from "../assets/cenoura.jpg";
import manga from "../assets/manga.png";
import limao from "../assets/limao.jpg";
import beterraba from "../assets/beterraba.jpg";
import tomate from "../assets/tomate.jpg";
import carrinho from "../assets/carrinho.png";
import { useState } from "react";

function Main(){
  const [imagem, setImagem] = useState(carrinho);
  const [preco, setPreco] = useState("Clique no produto para colocar no carrinho");
  const [numero,setNumero] = useState(null);

  const clickDiminuir = () => {
    if(numero > 0){
      setNumero(numero - 1);
    }
  }
  
  return (
    <>
      <main>
        <S.Container>
          <S.Produtos>
            <h1>
              Hortifruti <span>VnW</span>
            </h1>
            <h2>Nossos Produtos</h2>
            <S.BoxItem>
              <img
                onClick={() => {
                  setImagem(alface), setPreco("R$ 3.00");
                }}
                src={alface}
                alt=""
              />
              <img
                onClick={() => {
                  setImagem(laranja), setPreco("R$ 5.00");
                }}
                src={laranja}
                alt=""
              />
              <img
                onClick={() => {
                  setImagem(cereja), setPreco("R$ 7.00");
                }}
                src={cereja}
                alt=""
              />
              <img
                onClick={() => {
                  setImagem(cenoura), setPreco("R$ 9.00");
                }}
                src={cenoura}
                alt=""
              />
              <img
                onClick={() => {
                  setImagem(manga), setPreco("R$ 12.00");
                }}
                src={manga}
                alt=""
              />
              <img
                onClick={() => {
                  setImagem(limao), setPreco("R$ 15.00");
                }}
                src={limao}
                alt=""
              />
              <img
                onClick={() => {
                  setImagem(beterraba), setPreco("R$ 17.00");
                }}
                src={beterraba}
                alt=""
              />
              <img
                onClick={() => {
                  setImagem(tomate), setPreco("R$ 19.00");
                }}
                src={tomate}
                alt=""
              />
            </S.BoxItem>
          </S.Produtos>
          <S.Carrinho>
            <S.Compras>
              <img src={imagem} alt="" />
              <p>{preco}</p>
              <p>{numero}</p>
            </S.Compras>
            <S.Quantidades>
              <button
                onClick={() => {
                  setNumero(numero + 1);
                }}
              >
                +
              </button>
              <button onClick={clickDiminuir}>-</button>
            </S.Quantidades>
          </S.Carrinho>
        </S.Container>
      </main>
    </>
  );                     
}

export default Main;