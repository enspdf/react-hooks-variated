import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [search] = useDebounce(name, 1000);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://universidad-react-api-test.luxfenix.now.sh/products?name=${name}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [search]);

  const handleInput = e => {
    setName(e.targe.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        onChange={handleInput}
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
