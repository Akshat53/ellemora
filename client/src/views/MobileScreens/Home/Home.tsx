import { connect } from "react-redux";
// import Categories from "../../../components/Categories";
import { getProductListAction } from "../../../store/products/products.actions";
import HeroSection from "../../../components/HeroSection/HeroSection";
import ShopNow from "../../../components/ShopNow/ShopNow";
import Heading from "../../../components/Headings/Heading";
import sliderImages from "../../../assets/images/slider1/index";
import HomeCarousel from "../../../components/Carousel/HomeCarousel/HomeCarousel";
import Grid1 from "../../../components/Grids/Grid1/Grid1";
import AppButton from "../../../components/Buttons/Button";
import img1 from "../../../assets/images/home/img1.png";
import img2 from "../../../assets/images/home/img3.png";
import Styles from "./index.module.css";
import demoImages from "../../../assets/images/demo-product-images";
import CustomCarousel from "../../../components/Carousel/CustomCarousel/CustomCarousel";
// import Customization from "../Customization/Customization";
import CelebrityStyle from "../../../components/Celebrity/CelebrityStyle";
import TailorTale from "../../../components/TailorTale/Tailor";
import Grid2 from "../../../components/Grids/Grid2/Grid2";
import View from "../../../components/ViewAll/View";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "PINK CASCADE SET",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24,000",
    originalPrice: "140,000",
    img: [demoImages.img8],
  },
  {
    title: "PINK CASCADE SET",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24,000",
    originalPrice: "140,000",
    img: [demoImages.img5],
  },
];

const cardData2 = [
  {
    title: "PINK CASCADE SET",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24,000",
    originalPrice: "10,000",
    img: [demoImages.img9],
  },
  {
    title: "PINK CASCADE SET",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24,000",
    originalPrice: "10,000",
    img: [demoImages.img10],
  },
  {
    title: "PINK CASCADE SET",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24,000",
    originalPrice: "10,000",
    img: [demoImages.img3],
  },
];

const cardData3 = [
  {
    title: "PINK CASCADE SET",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24,000",
    originalPrice: "10,000",
    img: [demoImages.img11],
  },
  {
    title: "PINK CASCADE SET",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24,000",
    originalPrice: "10,000",
    img: [demoImages.img12],
  },
];

const data = [
  {
    img: sliderImages.img1,
    text: "PINK CASCADE SET",
    disprice: "₹ 24,000",
    orgprice: "₹ 140,000",
    link: "/products",
  },
  {
    img: sliderImages.img2,
    text: "PINK CASCADE SET 2",
    disprice: "₹ 24,000",
    orgprice: "₹ 140,000",
    link: "/product",
  },
  {
    img: sliderImages.img3,
    text: "PINK CASCADE SET 3",
    disprice: "₹ 24,000",
    orgprice: "₹ 140,000",
    link: "",
  },
  {
    img: sliderImages.img4,
    text: "PINK CASCADE SET 4",
    disprice: "₹ 24,000",
    orgprice: "₹ 140,000",
    link: "",
  },
];

const Home: React.FC<homeProps> = (props: any) => {
  const { productStore, productActions } = props;

  console.log(productActions, productStore, "state with actions");
  return (
    <div className="">
      {/* <Categories /> */}
      <HeroSection
        img={img1}
        children={
          <p className={`text-light heading`}>
            TAILORED DEISGNING JUST FOR YOU
          </p>
        }
      />
      <ShopNow />
      <div className="d-flex justify-content-end ">
        <div className={`${Styles.viewAll} d-flex justify-content-between align-items-end`}>
          <Heading title="New Arrivals" />
          <p className="text-end">View All</p>
        </div>
      </div>

      <HomeCarousel data={data} />
      <div className="border-3 border-top border-bottom">
        <Heading title="what’s on your mind?" />
        <Grid2 />
      </div>
      <Heading title="style by celebrities" />
      <CelebrityStyle />
      <Heading title="Shop by style" />
      {/* <Grid /> */}
      <Heading title="A tale of tailormade dreams" />
      <TailorTale
        img={img2}
        children={
          <div className={`text-bg-light text-center w-100 h-50 p-4 mt-1`}>
            <h1 className={`${Styles.title} py-1 mb-4`}>ELLEMORA PROCESS</h1>
            <p className={`${Styles.description} py-1 mb-4`}>
              This product will be exclusively handcrafted for you
            </p>
            <AppButton
              label="EXPLORE"
              className={`${Styles.AppButton} mt-2 py-3`}
              bgColor="rgba(44, 44, 44, 1)"
              color="rgba(255, 255, 255, 1)"
              border="0.5px solid rgba(169, 169, 169, 1)"
              // onClick={{Customization}}
            />
          </div>
        }
      />
      {/* <Heading title="Shop by Occasion" /> */}
      {/* <Grid1 /> */}
      {/* <div className="d-flex flex-column p-2 ">
        <CustomCarousel data={cardData} view={"home"} />
        <AppButton label="EXPLORE ALL" className={`${Styles.Explore} `} />
      </div> */}
      <Heading title="Festive special" />
      <HomeCarousel data={data} />
      <Heading title="Best Seller" />
      <CustomCarousel data={cardData2} view={"card"} />
      <Heading title="Sale" />
      <CustomCarousel data={cardData3} view={"card"} />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    productStore: state.productStore,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    productActions: {
      getProductListAction: (params: any) =>
        dispatch(getProductListAction(params)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
