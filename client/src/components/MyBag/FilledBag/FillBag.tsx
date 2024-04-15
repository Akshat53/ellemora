import React, { useState } from 'react';
import deleteIcon from '../../../assets/svg/delete.svg';
import bagItemImg from '../../../assets/images/filled-bag images/index';
import styles from './fillbag.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
  color: string;
  size: string;
  orgprice: number;
  disprice: number;
  quantity: number;
  shippingDate: string;
  discountPercentage?: number;
  description: string;
}

const FillBag: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Pink Cascade Set',
      image: bagItemImg.img1,
      color: 'P',
      size: 'M',
      disprice: 24000,
      orgprice: 140000,
      quantity: 1,
      shippingDate: '25 June 2024',
      discountPercentage: 10,
      description: 'Pink Cascade set with red....',
    },
    {
        id: 2,
        name: 'Pink Cascade Set',
        image: bagItemImg.img2,
        color: 'P',
        size: 'M',
        disprice: 24000,
        orgprice: 140000,
        quantity: 1,
        shippingDate: '25 June 2024',
        discountPercentage: 10,
        description: 'Pink Cascade set with red....',
      },
      {
        id: 4,
        name: 'Pink Cascade Set',
        image: bagItemImg.img4,
        color: 'P',
        size: 'M',
        disprice: 24000,
        orgprice: 140000,
        quantity: 1,
        shippingDate: '25 June 2024',
        discountPercentage: 10,
        description: 'Pink Cascade set with red....',
      },
      {
        id: 5,
        name: 'Pink Cascade Set',
        image: bagItemImg.img5,
        color: 'P',
        size: 'M',
        disprice: 24000,
        orgprice: 140000,
        quantity: 1,
        shippingDate: '25 June 2024',
        discountPercentage: 10,
        description: 'Pink Cascade set with red....',
      },
      {
        id: 6,
        name: 'Pink Cascade Set',
        image: bagItemImg.img6,
        color: 'P',
        size: 'M',
        disprice: 24000,
        orgprice: 140000,
        quantity: 1,
        shippingDate: '25 June 2024',
        discountPercentage: 10,
        description: 'Pink Cascade set with red....',
      },
  ]);

  const totalPrice = products.reduce((acc, product) => {
    const discountedPrice = product.orgprice * (1 - (product.discountPercentage || 0) / 100);
    return acc + discountedPrice * product.quantity;
  }, 0);


  const [couponCode, setCouponCode] = useState('');
  const [note, setNote] = useState('');

  const handleApplyCoupon = () => {
    alert(`Coupon code "${couponCode}" applied!`);
  };

  const handleRemoveProduct = (productId: number) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleAddQuantity = (productId: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const handleRemoveQuantity = (productId: number) => {
    setProducts(
      products.map((product) =>
        product.id === productId ? { ...product, quantity: Math.max(product.quantity - 1, 0) } : product
      )
    );
  };


  return (
    <div>
      <div className="container my-5">
        <h5 className='fw-normal p-2 my-2'>Items(5)</h5>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-12 mb-3 d-flex pb-2 mb-4 border-bottom border-2">
              <div className={`${styles.productImageContainer}`}>
                <img src={product.image} alt={product.name} className={`${styles.prodimg} img-fluid`} />
              </div>
              <div className="ml-4">
                <div className="d-flex align-items-start">
                  <h5 className="flex-grow-1 fs-6 text-uppercase lh-base my-2 py-1 fw-normal">
                    {product.name}<br/><span>{product.description}</span>
                    {product.discountPercentage && (
                      <span className="badge text-danger ms-2 fw-medium border border-danger">
                        {product.discountPercentage}% off
                      </span>
                    )}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-link py-3 align-middle"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                </div>
                <div className='d-flex flex-row m-1 justify-content-center align-items-between '>
                  <p className="p-2">
                    Size<br/><button className="btn btn-outline-secondary">{product.size}{' '}</button>
                  </p>
                  <p className="p-2">
                    Color<br/>{' '}
                    <button
                      type="button"
                      className={`btn btn-outline-secondary ${product.color.toLowerCase()}`}
                    >
                      {product.color}
                    </button></p>
                  <div className="d-flex align-items-center my-3 p-2">
                    <div>
                    <button className="btn btn-outline-secondary" onClick={() => handleRemoveQuantity(product.id)}>
                      -
                    </button>
                    </div>
                    <div className="mx-2">{product.quantity}</div>
                    <div>
                    <button className="btn btn-outline-secondary" onClick={() => handleAddQuantity(product.id)}>
                      +
                    </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <p className={`${styles.discountedPrice} fw-small fs-6`}>₹{product.disprice}
                    <span className={`${styles.price} px-2 text-decoration-line-through text-secondary`}>₹{product.orgprice}</span></p>
                </div>
                <span className="text-muted d-flex justify-content-end">
                    Ship By {product.shippingDate}
                  </span>
              </div>
            </div>
          ))}
        </div>
        <div className="my-5">
          <table className="table">
            <tbody>
              <tr>
                <td>Bag Total:</td>
                <td>{totalPrice}</td>
              </tr>
              <tr>
                <td>Shipping Charges:</td>
                <td>6554</td>
              </tr>
              <tr>
                <td>Total Discount:</td>
                <td>-4000</td>
              </tr>
              <tr>
                <td>Tax:</td>
                <td>-4000</td>
              </tr>
              <tr>
                <td>Total Payable:</td>
                <td>{totalPrice + 6554 - 4000}</td>
              </tr>
              <tr>
                <td>Your Total Savings:</td>
                <td>2000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="my-5">
          <label htmlFor="couponCode">Coupon Code:</label>
          <input
            type="text"
            id="couponCode"
            className="form-control mb-3"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button type="button" className="btn btn-primary" onClick={handleApplyCoupon}>
            Apply Coupon Code
          </button>
        </div>
        <div className="my-5">
          <label htmlFor="note">Note:</label>
          <textarea
            id="note"
            className="form-control mb-3"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button type="button" className="btn btn-primary">
            Save Note
          </button>
        </div>
        <button type="button" className="btn btn-primary">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default FillBag;