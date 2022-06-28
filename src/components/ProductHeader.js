import './ProductHeader.css';

export default function ProductHeader() {
  return (
    <div className="product-header-container">
      <p className="product-path">
        <span className="product-span">Target</span> /{' '}
        <span className="product-span">Patio {'&'} Garden</span> /{' '}
        <span className="product-span">Patio Furniture</span> /{' '}
        <span className="product-span">Patio Sets</span> /{' '}
        <span className="product-span"> Conversation Sets</span>
      </p>
      <p className="shop-classics">Shop all TK Classics</p>
      <h1 className="product-header">
        Florence 7pc Outdoor Sectional Seating Group with Cushions - TK Classics
      </h1>
    </div>
  );
}
