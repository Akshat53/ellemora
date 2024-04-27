import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import payDetailIcon from '../../../assets/svg/payment details.svg';
import couponIcon from '../../../assets/svg/coupon.svg';
import noteIcon from '../../../assets/svg/addnote.svg';
import bagItemImg from "../../../assets/images/filled-bag images/index";


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
    {
      id: 4,
      name: "Pink Cascade Set",
      image: bagItemImg.img4,
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
      id: 5,
      name: "Pink Cascade Set",
      image: bagItemImg.img5,
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
      id: 6,
      name: "Pink Cascade Set",
      image: bagItemImg.img6,
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
  return (
    <div>
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