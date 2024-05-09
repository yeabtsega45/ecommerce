import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h3>Commerce Hub</h3>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
