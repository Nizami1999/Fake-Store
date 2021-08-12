import React from "react";
import { Link } from "react-router-dom";
import "./ProductComponent.css";

function ProductComponent({ id, title, category, price, image }) {
  return (
    <div className="col-md-3">
      <div className="product-item">
        <Link to={`/product/${id}`}>
          <h4>{category}</h4>
          <h6 title={title}>{title}</h6>
          <div className="product-img">
            <img src={image} alt="product-img" />
          </div>
          <h6>${price}</h6>
        </Link>
      </div>
    </div>
  );
}

export default ProductComponent;
