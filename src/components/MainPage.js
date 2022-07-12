import React from 'react';
import Header from './Header';
import Nav from './Nav';
import ProductHeader from './ProductHeader';
import ProductPhotos from './ProductPhotos';

export default function MainPage() {
  return (
    <div>
      <Header storeName="Heath"></Header>
      <Nav />
      <ProductHeader />
      <ProductPhotos />
    </div>
  );
}
