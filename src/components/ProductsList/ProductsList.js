import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/actions/productsAction";
import Error from "../Error/Error";
import ProductComponent from "../ProductComponent/ProductComponent";
import Spinner from "../Spinner/Spinner";
import "./ProductsList.css";

function ProductsList() {
  const productsData = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div id="products">
      <div className="container">
        <div className="row">
          {productsData.loading ? (
            <Spinner />
          ) : productsData.error ? (
            <Error />
          ) : (
            productsData &&
            productsData.products &&
            productsData.products.map((product) => (
              <ProductComponent category="all" key={product.id} {...product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
