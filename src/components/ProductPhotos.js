import './ProductPhotos.css';
import Photo1 from '../images/target-product-1.jpeg';

export default function ProductPhotos() {
  return (
    <div className="product-photos-container">
      <img className="main-product-img" src={Photo1} alt="product"></img>
    </div>
  );
}
