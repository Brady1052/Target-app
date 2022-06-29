import React from 'react';
import './ProductHeader.css';

export default function ProductHeader() {
  return (
    <div className="product-header-container">
      <p className="product-path">
        <a href="#" className="product-anchor">
          Target
        </a>{' '}
        /{' '}
        <a href="#" className="product-anchor">
          Patio {'&'} Garden
        </a>{' '}
        /{' '}
        <a href="#" className="product-anchor">
          Patio Furniture
        </a>{' '}
        /{' '}
        <a href="#" className="product-anchor">
          Patio Sets
        </a>{' '}
        /{' '}
        <a href="#" className="product-anchor">
          {' '}
          Conversation Sets
        </a>
      </p>
      <p className="shop-classics">Shop all TK Classics</p>
      <h1 className="product-header">
        Florence 7pc Outdoor Sectional Seating Group with Cushions - TK Classics
      </h1>
    </div>
  );
}
