import React, { useState } from "react";
import ProductCarousel from "../Carousel/ProductCarousel/ProductCarousel";
import Styles from "./productCard.module.css";
import shareIcon from "../../assets/svg/share.svg";
import wishlistIcon from "../../assets/svg/fav.svg";
import AppButton from "../Buttons/Button";
import ProductColors from "../Buttons/ProductColors/ProductColors";
import SizeChart from "../SizeChart/SizeChart";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/Slice/BagSlice";

interface ProductCardProps {
  data: {
    title: string;
    discount: string;
    description: string;
    discountedPrice: string;
    originalPrice: string;
    img?: string[];
    colorName: string; // Add color name prop
    colorsCode: string; // Add color code prop
  };
  view: string;
  onClick: any;
  colors: (colorName: string, colorsCode: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  data,
  view,
  onClick,
  colors,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log('data', data);
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(addProduct(data)); // Assuming `data` contains the product information
    console.log('added to bag');
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const listView = () => {
    return (
      <>
         {data.img && <ProductCarousel images={data.img} />}
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
                label="Add to Bag "
                className="w-100 p-1 "
                onClick={handleAddToBag} // Call handleAddToBag when the button is clicked
                bgColor="#FBFBFB"
                color="rgba(42, 42, 42, 1)"
                border="0.5px solid rgba(169, 169, 169, 1)"
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
        {data.colorName && (
   
          <div className="d-flex justify-content-center p-1 gap-2">
            <div
              className="border"
              style={{ height: "19px", width: "19px", padding: "2px" }}
              onClick={() => colors(color)}
            >
              <div
                className="w-100 h-100"
                style={{ backgroundColor: data.colorsCode }}
              ></div>
            </div>
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
                  onClick={toggleModal}
                  bgColor="white"
                  color="black"
                  border="1px solid #5C5C5C"
                />

                {isModalOpen && <SizeChart onClose={toggleModal} />}
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
                label="Add to Bag "
                className="w-100 p-1 "
                onClick={handleAddToBag} // Call handleAddToBag when the button is clicked
                bgColor="#FBFBFB"
                color="rgba(42, 42, 42, 1)"
                border="0.5px solid rgba(169, 169, 169, 1)"
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
         {data.img && <ProductCarousel images={data.img} />}
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
                className="w-100 p-1 "
                onClick={handleAddToBag} // Call handleAddToBag when the button is clicked
                bgColor="#FBFBFB"
                color="rgba(42, 42, 42, 1)"
                border="0.5px solid rgba(169, 169, 169, 1)"
              />
          </div>
        </div>
      </>
    );
  };
  const homeView = () => {
    return (
      <>  
        {data.img && <img src={data.img} width={"100%"} height={"80%"} />}
        <div className={`${Styles.productContent} text-center py-3`}>
          <p className={`${Styles.title} fw-normal fs-5 te
          xt-dark fs-large `}>
            {data.title}
          </p>

          <p className={`${Styles.discountedPrice} fw-small mt-2 fs-6`}>
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
  const cardView = () => {
    return (
      <>
         {data.img && <ProductCarousel images={data.img} />}
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
          <p className={`${Styles.title} fw-small fs-5${Styles.titleGrid}`}>
            {data.title}
          </p>
          <p className={`${Styles.discription} fw-light mt-1`}>{data.description}</p>
          <p className={`${Styles.discountedPrice} fw-medium mt-2`}>
            ₹ {data.discountedPrice}
            <span
              className={`${Styles.price} px-2 text-decoration-line-through`}
            >
              ₹ {data.originalPrice}
            </span>
            <span
              className={`${Styles.hcd}`}
            >
              {data.discount}
            </span>
          </p>
          <div
            className={`${Styles.btn} d-flex justify-content-evenly gap-1 py-2`}
          >
            <AppButton
              label="Add to Bag "
              className="w-100 p-1 "
              onClick={""}
              bgColor="#FBFBFB"
              color="rgba(42, 42, 42, 1)"
              border="0.5px solid rgba(169, 169, 169, 1)"
            />
          </div>
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
     
      {view == "grid"
          ? gridView()
          : view == "list"
            ? listView()
            : view == "home"
              ? homeView()
              : view == "card"
                ? cardView()
                : productView()}
      </div>
    </div>
  );
};

export default ProductCard;