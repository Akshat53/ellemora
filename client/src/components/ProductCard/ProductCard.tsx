import React from "react";
import ProductCarousel from "../Carousel/ProductCarousel/ProductCarousel";
import Styles from "./productCard.module.css";
import shareIcon from "../../assets/svg/share.svg";

import wishlistIcon from "../../assets/svg/fav.svg";

import AppButton from "../Buttons/Button";
import ProductColors from "../Buttons/ProductColors/ProductColors";

interface ProductCardProps {
  data: {
    title: string;
    discount: string;
    description: string;
    discountedPrice: string;
    originalPrice: string;
    img?: string[];
    colour: string[] | null;
  };
  view: string;
  onClick: (item: object) => void;
  colors: (color: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  data,
  view,
  onClick,
  colors,
}) => {
  const listView = () => {
    return (
      <>
        {data.colour && data.colour.length > 0 && (
          <div className="d-flex justify-content-center p-1 gap-2">
            {data.colour.map((color, index) => (
              <div
                key={index}
                className="border"
                style={{ height: "19px", width: "19px", padding: "2px" }}
                onClick={() => colors(color)}
              >
                <div
                  className="w-100 h-100"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        )}
        <div className={`${Styles.productContent} p-2 py-2`}>
          <p className={`${Styles.title} fw-normal fs-6 `}>
            {data.title}
            <span className={`border border-1 p-1 px-2 m-3 ${Styles.discount}`}>
              {data.discount}
            </span>
          </p>

          <p className={`${Styles.discription} fw-light`}>{data.description}</p>

          <p className={`${Styles.discountedPrice} fw-medium mt-2`}>
            ₹ {data.discountedPrice}
            <span
              className={`${Styles.price} px-2 text-decoration-line-through`}
            >
              ₹ {data.originalPrice}
            </span>
          </p>
          <div
            className={`${Styles.btn} d-flex justify-content-evenly gap-1 py-2`}
          >
            <AppButton
              label="Add to bag"
              className="w-100 border-0 p-2"
              onClick={""}
              bgColor="#2C2C2C"
            />
            <ProductColors />
          </div>
        </div>
      </>
    );
  };
  const productView = () => {
    return (
      <>
        {data.colour && data.colour.length > 0 && (
          <div className="d-flex justify-content-center p-1 gap-2">
            {data.colour.map((color, index) => (
              <div
                key={index}
                className="border"
                style={{ height: "19px", width: "19px", padding: "2px" }}
                onClick={() => colors(color)}
              >
                <div
                  className="w-100 h-100"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        )}
        <div className={`${Styles.productContent} p-2 py-2`}>
          <p className={`${Styles.title} fw-normal fs-6`}>
            {data.title}
            <span
              className={`border border-1 p-1 px-2 m-1 ${Styles.gridDiscount}`}
            >
              {data.discount}
            </span>
          </p>
          <p className={`${Styles.discription} fw-light`}>{data.description}</p>

          <p className={`${Styles.discountedPrice} fw-medium mt-2`}>
            ₹ {data.discountedPrice}
            <span
              className={`${Styles.price} px-2 text-decoration-line-through`}
            >
              ₹ {data.originalPrice}
            </span>
          </p>
          <div
            className={`${Styles.btn} d-flex justify-content-evenly gap-1 py-2`}
          >
            <div className="d-flex flex-column w-100 gap-2 ">
              <div className="w-100 d-flex gap-2  ">
                <AppButton
                  label="Size"
                  className="w-100 border-0 p-2"
                  onClick={""}
                  bgColor="white"
                  color="black"
                  border="1px solid #5C5C5C"
                />
                <button className="bg-white p-2 default-border">
                  <img src={shareIcon} />
                </button>
                <button className="bg-white p-2 default-border">
                  <img src={wishlistIcon} />
                </button>
              </div>
              <div className="d-flex gap-2 w-100 ">
                <AppButton
                  label="Add to bag"
                  className="w-100 border-0 p-2"
                  onClick={""}
                  bgColor="#2C2C2C"
                />
                <AppButton
                  label="Buy Now "
                  className="w-100 border-0 p-2"
                  onClick={""}
                  bgColor="#2C2C2C"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const gridView = () => {
    return (
      <>
        {data.colour && data.colour.length > 0 && (
          <div className="d-flex justify-content-center p-1 gap-2">
            {data.colour.map((color, index) => (
              <div
                key={index}
                className="border"
                style={{ height: "19px", width: "19px", padding: "2px" }}
                onClick={() => colors(color)}
              >
                <div
                  className="w-100 h-100"
                  style={{ backgroundColor: color }}
                ></div>
              </div>
            ))}
          </div>
        )}
        <div className={`${Styles.productContent} p-2 py-2`}>
          <p className={`${Styles.title} fw-normal fs-6 ${Styles.titleGrid}`}>
            {data.title}
            <span
              className={`border border-1 p-1 px-2 m-1 ${Styles.gridDiscount}`}
            >
              {data.discount}
            </span>
          </p>

          <p className={`${Styles.discountedPrice} fw-medium mt-2`}>
            ₹ {data.discountedPrice}
            <span
              className={`${Styles.price} px-2 text-decoration-line-through`}
            >
              ₹ {data.originalPrice}
            </span>
          </p>
          <div
            className={`${Styles.btn} d-flex justify-content-evenly gap-1 py-2`}
          >
            <AppButton
              label="Add to Bag "
              className="w-100 border-0 p-2"
              onClick={""}
              bgColor="#FBFBFB"
              color="#2A2A2A"
              border="1px solid #5C5C5C"
            />
          </div>
        </div>
      </>
    );
  };
  const homeView = () => {
    return (
      <>
  
      
        <div className={`${Styles.productContent} p-2 py-2`}>
          <p className={`${Styles.title} fw-normal fs-6 `}>
            {data.title}
            <span className={`border border-1 p-1 px-2 m-3 ${Styles.discount}`}>
              {data.discount}
            </span>
          </p>

          <p className={`${Styles.discription} fw-light`}>{data.description}</p>

          <p className={`${Styles.discountedPrice} fw-medium mt-2`}>
            ₹ {data.discountedPrice}
            <span
              className={`${Styles.price} px-2 text-decoration-line-through`}
            >
              ₹ {data.originalPrice}
            </span>
          </p>
         
        </div>
      </>
    );
  };
  return (
    <div
      className="w-100 d-flex justify-content-center"
      onClick={view !== "product" ? () => onClick(data) : undefined}
    >
      <div className={`border-0 ${Styles.productCard}`}>
        {data.img && <ProductCarousel images={data.img} />}
        {view == "grid"
          ? gridView()
          : view == "list"
            ? listView()
            : view == "home"
              ? homeView()
              : productView()}
      </div>
    </div>
  );
};

export default ProductCard;
