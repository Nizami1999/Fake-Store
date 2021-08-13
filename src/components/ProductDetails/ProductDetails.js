import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";
import { fetchProduct } from "../../redux/actions/productsAction";
import ProductsList from "../ProductsList/ProductsList";

function ProductDetails() {
  const productId = useParams().productId;
  const productData = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [productId]);

  const { error, loading, product } = productData;

  return (
    <div id="product-details">
      <div className="container">
        <div className="row">
          {loading ? (
            <div style={{ marginTop: "40px" }}>
              <Spinner />
            </div>
          ) : error ? (
            <Error />
          ) : (
            product && (
              <div id="product-details" className="row">
                <div className="col-md-6">
                  <div className="product-img">
                    <img src={product.image} alt="123" />
                  </div>
                </div>
                <div className="col-md-6">
                  <h3>{product.title}</h3>
                  <h6>{product.category}</h6>
                  <br />
                  <h4>Price: ${product.price}</h4>
                  <br />
                  <br />
                  <p>{product.description}</p>
                  <br />
                  <Link to="/">
                    <button className="btn btn-success">Go Back</button>
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
        <br />
      </div>
    </div>
  );
}

export default ProductDetails;
