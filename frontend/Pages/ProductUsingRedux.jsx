import { useDispatch, useSelector } from "react-redux";
import productReducer from "../redux/product/reducer";
import { useEffect } from "react";
import { fetchProduct } from "../redux/product/actions";

const ProductUsingRedux = () => {
  const { products } = useSelector((state) => state.productReducer);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
    console.log(fetchProduct());
  }, [dispatch]);
  return (
    <>
      <h1> Products Using Saga</h1>
    </>
  );
};

export default ProductUsingRedux;
