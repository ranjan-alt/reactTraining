import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext.jsx";
const Product = () => {
  const { products, fetchProducts } = useContext(ProductContext);
  console.log(products, "products");

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <h1>Product</h1>
    </>
  );
};

export default Product;
