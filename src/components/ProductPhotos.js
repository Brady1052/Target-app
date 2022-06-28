import './ProductPhotos.css';
import Photo1 from '../images-product/target-product-1.jpeg';
import Photo2 from '../images-product/target-product-2.jpeg';
import Photo3 from '../images-product/target-product-3.jpeg';
import Photo4 from '../images-product/target-product-4.jpeg';
import Photo5 from '../images-product/target-product-5.png';
export default function ProductPhotos() {
  return (
    <div className="product-photos-container">
      <div className="main-product-img-container">
        <img className="main-product-img" src={Photo1} alt="product"></img>
      </div>
      <img className="second-product-img" src={Photo2} alt="product"></img>
      <img className="third-product-img" src={Photo3} alt="product"></img>
      <img className="fourth-product-img" src={Photo4} alt="product"></img>
      <img className="fifth-product-img" src={Photo5} alt="product"></img>
    </div>
  );
}
