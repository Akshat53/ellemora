import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import payDetailIcon from '../../../assets/svg/payment details.svg';
import couponIcon from '../../../assets/svg/coupon.svg';
import noteIcon from '../../../assets/svg/addnote.svg';
import bagItemImg from "../../../assets/images/filled-bag images/index";
import styles from './detail.module.css';
import deleteIcon from "../../../assets/svg/delete.svg";

const Details: React.FC = () => {

const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Pink Cascade Set",
      image: bagItemImg.img1,
      color: "#570000",
      size: "M",
      disprice: 24000,
      orgprice: 140000,
      quantity: 1,
      shippingDate: "25 June 2024",
      discountPercentage: 10,
      description: "Pink Cascade set with red....",
    },
    {
      id: 2,
      name: "Pink Cascade Set",
      image: bagItemImg.img2,
      color: "#570000",
      size: "M",
      disprice: 24000,
      orgprice: 140000,
      quantity: 1,
      shippingDate: "25 June 2024",
      discountPercentage: 10,
      description: "Pink Cascade set with red....",
    },
  ]);

const totalPrice = products.reduce((acc, product) => {
    const discountedPrice =
        product.orgprice * (1 - (product.discountPercentage || 0) / 100);
    return acc + discountedPrice * product.quantity;
    }, 0);

    const [couponCode, setCouponCode] = useState("");
    const [note, setNote] = useState("");

    const handleApplyCoupon = () => {
    alert(`Coupon code "${couponCode}" applied!`);
    };

    const handleRemoveProduct = (productId: number) => {
      setProducts(products.filter((product) => product.id !== productId));
    };
  
    const handleAddQuantity = (productId: number) => {
      setProducts(
        products.map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    };
  
    const handleRemoveQuantity = (productId: number) => {
      setProducts(
        products.map((product) =>
          product.id === productId
            ? { ...product, quantity: Math.max(product.quantity - 1, 0) }
            : product
        )
      );
    };

  return (
    <div>
      <h5 className={`${styles.item} fw-normal p-2 my-2 text-uppercase`}>Items(2)</h5>
        <div className="row">
          {products.map((product) => (
            <div
              key={product.id}
              className="col-12 mb-3 d-flex pb-2 mb-4 border-bottom border-2"
            >
              <div className={`${styles.productImageContainer}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={`${styles.prodimg} img-fluid`}
                />
              </div>
              <div className="ml-4">
                <div className="d-flex align-items-start">
                  <h5 className="flex-grow-1 fs-6 text-uppercase lh-base my-2 py-1 fw-normal">
                    {product.name}{product.discountPercentage && (
                      <span className="badge text-danger ms-2 fw-medium border border-danger">
                        {product.discountPercentage}% off
                      </span>
                    )}
                  </h5>
                  <button
                    type="button"
                    className="btn btn-link p-2 m-1 align-middle"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    <img src={deleteIcon} alt="Delete" />
                  </button>
                </div>
                <div className="mb-4">{product.description}</div>
                <div className="d-flex flex-row m-1 justify-content-between align-items-center">
                  <p className="p-2">
                    Size
                    <br />
                  <div className="border rounded p-1 text-center">
                  {product.size}
                  </div>
                  </p>
                  <p className="p-2">
                    Color
                    <br />{" "}
                  <div className={`p-1 border rounded ${styles.colors}`}>
                    <div style={{backgroundColor:product.color}} className={`h-100 w-100`}>
                    </div>
                  </div>
                  </p>
                  <div className="border d-flex rounded h-50 ms-5">
                    <div className="p-3" onClick={()=>handleAddQuantity(product.id)}>+</div>
                    <div className="p-3 w-75 border-end border-start">{product.quantity}</div>
                    <div className="p-3" onClick={()=>handleRemoveQuantity(product.id)}>-</div>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <p className={`${styles.discountedPrice} fw-small fs-6`}>
                    ₹{product.disprice}
                    <span
                      className={`${styles.price} px-2 text-decoration-line-through text-secondary`}
                    >
                      ₹{product.orgprice}
                    </span>
                  </p>
                </div>
                <span className="text-muted d-flex justify-content-end">
                  Ship By {product.shippingDate}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-bottom-0 border-secondary-subtle rounded-top p-3">
          <div className="fs-5 text-black fw-medium text-uppercase py-1"><img src={payDetailIcon} alt="" className="img-fluid" style={{ width:'24px', letterSpacing:'0.1em' }}/> PRICE DETAILS</div>
          <div className="d-flex justify-content-between py-2" style={{ fontSize:'15px', letterSpacing:'0.1em' }}>
            <div>Bag Total</div>
            <div>{totalPrice.toLocaleString('en-IN')}</div>
          </div>
          <div className="d-flex justify-content-between py-2" style={{ fontSize:'15px', letterSpacing:'0.1em' }}>
            <div>Shipping Charges</div>
            <div>0</div>
          </div>
          <div className="d-flex justify-content-between py-2" style={{ fontSize:'15px', letterSpacing:'0.1em' }}>
            <div>Tax</div>
            <div>6554</div>
          </div>
          <div className="d-flex justify-content-between fs-6 text-black fw-medium text-uppercase py-2" style={{ fontSize:'15px', letterSpacing:'0.1em' }}>
            <div className="">Total DISCOUNT</div>
            <div>-4000</div>
          </div>
        </div>
        <div className="border border-secondary-subtle p-3">
          <div className="fs-5 text-black fw-medium text-uppercase py-1"><img src={couponIcon} alt="" className="img-fluid me-2" style={{ width:'22px', letterSpacing:'0.1em' }}/>COUPON CODE</div>
          <div className="d-flex justify-content-center align-items-center py-3">
          <input
            type="text"
            id="couponCode"
            className="form-control rounded-0"
            style={{ height:'55px', border:'0.48px solid #9F9F9F', borderRight:'0px', letterSpacing: '0.1em' }}
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-dark rounded-0 fw-light text-uppercase"
            style={{ height:'55px', border:'border: 0.48px solid #9F9F9F', borderLeft:'0px', letterSpacing: '0.1em', width: '190px', fontSize:'15px' }}
            onClick={handleApplyCoupon}
          >
            Apply
          </button>
          </div>
          <Link to={'/coupons'} className="d-flex justify-content-end text-black fs-6 px-1" style={{ letterSpacing:'0.1em' }}>My Coupons</Link>
        </div>
        <div className="border border-top-0 border-secondary-subtle p-3">
          
        <div className="fs-5 text-black fw-medium text-uppercase py-1"><img src={noteIcon} alt="" className="img-fluid me-2" style={{ width:'22px', letterSpacing:'0.1em' }}/>aDD NOTE</div>
          <textarea
            id="note"
            className="form-control mb-3 rounded-0"
            style={{ border:'0.48px solid #9F9F9F', letterSpacing: '0.1em' }}
            placeholder="Add a note to your order"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="border border-top-0 border-secondary-subtle rounded-bottom p-3">
        <div className="d-flex justify-content-between fs-6 text-black fw-medium text-uppercase py-2" style={{ fontSize:'15px', letterSpacing:'0.1em' }}>
            <div className="">Total Payable</div>
            <div className="fs-5">{totalPrice.toLocaleString('en-IN')}</div>
          </div>
          <div className="d-flex justify-content-between fs-6 fw-medium text-uppercase py-2" style={{ fontSize:'15px', letterSpacing:'0.1em', color: '#0EB400' }}>
            <div className="">YOUR TOTAL SAVINGS</div>
            <div className="fs-5">2000</div>
          </div>
        <button type="button" className="btn w-100 rounded-0 my-3" style={{ height: '50px', background: '#B50000', color: '#FFFFFF', letterSpacing:'0.1em'}}>
          Proceed to Checkout
        </button>
        </div>
      </div>
  )
}

export default Details