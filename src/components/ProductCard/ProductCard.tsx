import React from "react";
import ProductCarousel from "../Carousel/ProductCarousel/ProductCarousel";
import Styles from "./productCard.module.css";
import demoImages from "../../assets/images/demo-product-images";
import cartIcon from "../../assets/svg/bag.svg"
import cartIcon2 from "../../assets/svg/cart.svg"

interface ProductCardProps {
  data: {
    title: string;
    discount: string;
    description: string;
    discountedPrice: string;
    originalPrice: string;
    img?: string[];
  };
  view: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ data, view }) => (
  <div className="w-100 d-flex justify-content-center">
    <div className={`border-0  ${Styles.productCard} `}>
      {data.img && data.img.length > 0 ? (
        <ProductCarousel images={data.img} />
      ) : (
        <img src={demoImages.img1} alt="product" />
      )}
      <div className={`${Styles.productContent} p-2 py-2 `}>
        <p className={`${Styles.title} fw-normal fs-6`}>
          {data.title}
          <span className={`${Styles.discount} border border-1 p-1 px-2 m-3`}>
            {data.discount}
          </span>
        </p>

        <p className={`${Styles.discription} fw-light`}>{data.description}</p>
        <p className={`${Styles.discountedPrice} fw-medium`}>
          ₹ {data.discountedPrice}
          <span
            className={`${Styles.price} px-2 text-decoration-line-through `}
          >
            ₹ {data.originalPrice}
          </span>
        </p>
        <div
          className={`${Styles.btn} d-flex justify-content-evenly gap-1 py-2`}
        >
          {view == "grid" ? (
            <button
              className={` ${Styles.addToBag} fw-normal border-0 p-2 w-100 `}
            >
             <img src={cartIcon} /> Add to bag
            </button>
          ) : (
            <>
              <button className="fw-normal border-0 p-2 w-50">
              <img src={cartIcon2} className="text-light"/>  Add to bag
              </button>
              <button className="fw-normal border-0 w-50">colors</button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default ProductCard;
