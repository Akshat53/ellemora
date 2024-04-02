import { connect } from "react-redux";
import Categories from "../../../components/Categories";
import { getProductListAction } from "../../../store/products/products.actions";
import HeroSection from "../../../components/HeroSection/HeroSection";
import ShopNow from "../../../components/ShopNow/ShopNow";
import Heading from "../../../components/Headings/Heading";
import sliderImages from "../../../assets/images/slider1/index";
import HomeCarousel from "../../../components/Carousel/HomeCarousel/HomeCarousel";
import Grid from "../../../components/Grid/Grid";
import AppButton from "../../../components/Buttons/Button";
import img1 from "../../../assets/images/home/img1.png";
import img2 from "../../../assets/images/home/img3.png";
import Styles from "./index.module.css";
import ProductCard from "../../../components/ProductCard/ProductCard";
import demoImages from "../../../assets/images/demo-product-images";
import CustomCarousel from "../../../components/Carousel/CustomCarousel/CustomCarousel";

interface homeProps {}

const cardData = [
  {
    title: "Europe Street beat",
    discount: "20% off",
    description: "Pink Cascade set with red velvet touch",
    discountedPrice: "24000",
    originalPrice: "140,000",
    img: [demoImages.img1 ],
  
  },
];


const data = [
  {
    img: sliderImages.img1,
    text: "PINK CASCADE SET",
    link: "/products",
  },
  {
    img: sliderImages.img2,
    text: "PINK CASCADE SET 2",
    link: "/product",
  },
  {
    img: sliderImages.img3,
    text: "PINK CASCADE SET 3",
    link: "",
  },
  {
    img: sliderImages.img4,
    text: "PINK CASCADE SET 4",
    link: "",
  },
];

const Home: React.FC<homeProps> = (props: any) => {
  const { productStore, productActions } = props;

  console.log(productActions, productStore, "state with actions");
  return (
    <div className="">
      <Categories />
      <HeroSection
        img={img1}
        children={<p className={`text-light heading`}>TAILORED DEISGNING JUST FOR YOU</p>}/>
      <ShopNow />
      <Heading title="New Arrivals" />
      <HomeCarousel data={data} />
      <Heading title="Shop by Occasion" />
      <Grid />
      <Heading title="A tale of tailormade dreams" />
      <HeroSection
        img={img2}
        children={
          <AppButton
            label="Customization"
            className={`${Styles.AppButton} `} 
            bgColor="rgba(35, 35, 35, 1)"
            color="rgba(255, 255, 255, 1)"
            border="0.5px solid rgba(169, 169, 169, 1)"
          />
        }
      />
      <Heading title="Shop by style" />

      
      {cardData.map((item,i)=>(
         <ProductCard data={item} view="home"/>
      ))}
     
      <div className="d-flex flex-column p-2 ">
      <AppButton label="EXPLORE ALL" className={`${Styles.Explore} `}/>
      </div>
      <Heading title="Festive special" />
      <HomeCarousel data={data} />
      <Heading title="Sale" />
      <ProductCard data={""}/>
      <CustomCarousel data={data}/>
      
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
