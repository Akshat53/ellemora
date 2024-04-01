import { connect } from "react-redux";
import Categories from "../../../components/Categories";
import { getProductListAction } from "../../../store/products/products.actions";
import HeroSection from "../../../components/HeroSection/HeroSection";
import ShopNow from "../../../components/ShopNow/ShopNow";
import Heading from "../../../components/Headings/Heading";
import sliderImages from "../../../assets/images/slider1/index";
import HomeCarousel from "../../../components/Carousel/HomeCarousel/HomeCarousel";
// import Grid from "../../../components/Grid/Grid";

interface homeProps {}

const data = [
  {
    img: sliderImages.img1,
    text: "PINK CASCADE SET",
    link: "/products"
  },
  {
    img: sliderImages.img2,
    text: "PINK CASCADE SET 2",
    link: "/product"
  },
  {
    img: sliderImages.img3,
    text: "PINK CASCADE SET 3",
    link: ""
  },
  {
    img: sliderImages.img4,
    text: "PINK CASCADE SET 4",
    link: ""
  }
];

const Home: React.FC<homeProps> = (props: any) => {
  const { productStore, productActions } = props;

  console.log(productActions, productStore, "state with actions");
  return (
    <div className="w-full">
      <Categories />
      <HeroSection />
      <ShopNow />
      <Heading title="New Arrivals" />
      <HomeCarousel  data={data}/>
      <Heading title="Shop by Occasion" />
      {/* <Grid /> */}
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
