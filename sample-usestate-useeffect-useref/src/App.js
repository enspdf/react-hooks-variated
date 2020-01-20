import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [products, setProducts] = useState([]);
  const enter = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (name === enter.current.value) {
        fetch(`https://universidad-react-api-test.luxfenix.now.sh/products?name=${name}`)
          .then(res => res.json())
          .then(data => setProducts(data.products));
      }
    }, 600);
  }, [name]);

  const handleInput = e => {
    setName(e.targe.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={handleInput}
        ref={enter}
      />
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
