import React from 'react';
import './ProductSidebarPrice.css';

export default function ProductSidebarPrice() {
  return (
    <div className="product-sidebar-price-container">
      <div className="product-sidebar-price-container-child">
        <h1 className="product-price">$1,448.99</h1>
        <p className="sale">Sale</p>
        <p>
          Reg $2069.99 Save $621.00 {'('}30% off{')'}
        </p>
      </div>
    </div>
  );
}
