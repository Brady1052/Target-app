import './ProductHeader.css';

export default function ProductHeader() {
  return (
    <div className="product-header-container">
      <p className="product-path">
        <span>Target</span> / <span>Patio {'&'} Garden</span> /{' '}
        <span>Patio Furniture</span> / <span>Patio Sets</span> /{' '}
        <span> Conversation Sets</span>
      </p>
      <p className="shop-classics">Shop all TK Classics</p>
      <h1 className="product-header">
        Florence 7pc Outdoor Sectional Seating Group with Cushions - TK Classics
      </h1>
    </div>
  );
}
