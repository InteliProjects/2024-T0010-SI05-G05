import React, { useState } from "react";
import styles from "./styles.module.scss";

import SearchBar from "./searchbar/searchbar";
import SearchState from "./searchState/search-state";
import Graphic from "./graphic/graphic";

function Cotation() {

  const [state, setState] = useState('');
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false); // Componente invisível por padrão
  const [selectedProduct, setSelectedProduct] = useState({
    id: 0,
    name: '',
    average: 0,
  }); // Produto selecionado pelo usuário

  function handleState(value) {
    setState(value);
  }

  function handleProduct(value) {
    setProduct(value);
  }

  async function handleClick() {
    if (product !== '' && state !== '') {
      fetch("http://127.0.0.1:8000/get-mean-price?product=" + product).then(async (data)=>{
        if (data.status !== 200){
          alert("Erro ao buscar preço médio do produto");
        }
        else{
          data.json().then(async (data)=>{
            await setProducts(data.items);
          })
        }
      })
    }
  }

  function handleGraphic(event, id, name, average) {
    const product = {
      id: id,
      name: name,
      average: average,
    }
    setSelectedProduct(product);
    setVisible(true);

  }

  const productsHTML = products.map((product) => {
    return (
      <div className={styles.info}>
        <div className={styles.column}>
          <h2>ID do Produto: {product.id}</h2>
          <p>Nome: {product.name}</p>
          <p>Preço médio: <span className={styles.price}>{product.average}</span></p>
          <p>Local: {state}</p>
        </div>
        <button className={styles.butao} onClick={(event) => {
          handleGraphic(event, product.id, product.name, product.average);
        }}>Ver gráfico</button>
      </div>
    )
  })

  products.forEach((product) => {
    console.log(product)
  })

  return (
    <div className={styles.cotation}>
      <h1>Qual produto você deseja ver o preço médio?</h1>
      <div className={styles.content}>
        <SearchBar sendProduct={handleProduct}></SearchBar>
        <div className={styles.search}>
            <SearchState sendState={handleState}></SearchState>
            <button onClick={handleClick} className={styles.button}>Buscar</button>
        </div>
      </div>
      {productsHTML}
      <Graphic visible={visible} setVisible={setVisible} id={selectedProduct.id} name={selectedProduct.name} average={selectedProduct.average} state={state}></Graphic>
    </div>
    
  );
};

export default Cotation;