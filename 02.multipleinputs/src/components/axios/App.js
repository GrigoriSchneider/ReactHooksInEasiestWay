import React, { useEffect, useState } from "react";
import axios from "./axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts();
    // axios
    //   .get("/products")
    //   .then((response) => setProducts(response.data.products))
    //   .catch((error) => console.log(error));
  }, []);

  async function getProducts() {
    try {
      const response = await axios.get("/products");
      console.log(response);
      setProducts(response.data.products);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      {error !== "" && error}
      {products.map((product, index) => {
        return (
          <h3 key={index}>
            {product.title} - ${product.price}
          </h3>
        );
      })}
    </>
  );
};

export default App;
