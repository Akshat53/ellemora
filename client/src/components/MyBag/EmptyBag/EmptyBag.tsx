import React, { useState } from 'react';
import image from "../../../assets/images/my-bag/item1.png";
import Styles from "./bag.module.css";
import HeadBar from '../../HeadBar/HeadBar';

interface Product {
  id: number;
  name: string;
  image: string;
}

const EmptyBag: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };

  return (
    <div>
    <HeadBar header='Bag' />
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center p-2">
          <img src={image} alt='Empty Bag' className="img-fluid mb-1 p-3 w-50" />  
          <h1 className={`${Styles.bagtext} p-1 fs-4 fw-medium text-uppercase`}>Your Bag is Empty!</h1>
          <p className={`${Styles.bagpara} p-2 m-3 fs-6 fw-normal`}>Let's add some products</p>
        </div>
      </div>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col col-sm col-lg-4">
            <img src={product.image} alt={product.name} className="img-fluid mb-3" />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="d-grid gap-2 col-8 mx-auto text-center p-2 m-2">
          <button type="button" className="btn btn-dark btn-lg rounded-0 fs-5 fw-light" onClick={() => addProduct({ id: 1, name: '', image: '' })}>
            Add items
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmptyBag;