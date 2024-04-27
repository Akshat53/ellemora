import React, { useState } from "react";
import deleteIcon from "../../../assets/svg/delete.svg";
import bagItemImg from "../../../assets/images/filled-bag images/index";
import styles from "./fillbag.module.css";
import Details from "../PaymentDetails/Details";
// import payDetailIcon from '../../../assets/svg/payment details.svg';
// import couponIcon from '../../../assets/svg/coupon.svg';
// import noteIcon from '../../../assets/svg/addnote.svg';
// import { Link } from "react-router-dom";
// import HeadBar from "../../HeadBar/HeadBar";

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
  

  // const totalPrice = products.reduce((acc, product) => {
  //   const discountedPrice =
  //     product.orgprice * (1 - (product.discountPercentage || 0) / 100);
  //   return acc + discountedPrice * product.quantity;
  // }, 0);

  // const [couponCode, setCouponCode] = useState("");
  // const [note, setNote] = useState("");

  // const handleApplyCoupon = () => {
  //   alert(`Coupon code "${couponCode}" applied!`);
  // };

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
      <div className="container my-2">
        <h5 className={`${styles.item} fw-normal p-2 my-2 text-uppercase`}>Items(5)</h5>
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
        <Details />
      </div>
    </div>
  );
};

export default FillBag;
