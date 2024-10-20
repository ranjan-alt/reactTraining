import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductInAnArrayList, fetchProducts } from "../redux/slice/product";
const ProductSlice = () => {
  const productSliceReducer = useSelector(
    (state) => state?.productReducerSlice
  );
  //
  const { product_list } = productSliceReducer;
  const dispatch = useDispatch();
  const [productName, setProductName] = useState([]);
  console.log(productName, "productname");
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, []);
  return (
    <>
      <h1>Product</h1>
      <input
        type="text"
        placeholder="Add Product here"
        name="product"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={() => dispatch(addProductInAnArrayList(productName))}>
        Add Product
      </button>
    </>
  );
};

export default ProductSlice;
