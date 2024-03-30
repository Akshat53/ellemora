import { connect } from "react-redux";
import Categories from "../../../components/Categories";
import { getProductListAction } from "../../../store/products/products.actions";
import HeroSection from "../../../components/HeroSection/HeroSection";
import ShopNow from "../../../components/ShopNow/ShopNow";
import Heading from "../../../components/Headings/Heading";
import Swiper from "../../../components/Swiper/Swiper";

interface homeProps{
  
}

const Home: React.FC <homeProps> = (props: any) => {
  const { productStore, productActions } = props;

  console.log(productActions, productStore, "state with actions");
  return (
    <div className="w-full">
      <Categories />
      <HeroSection />
      <ShopNow/>
      <Heading title="New Arrivals"/>
     
      <Swiper />
      
      
    </div>
  );
};

const mapStateToProps = (state:any) => {
  return {
    productStore: state.productStore,
  };
};

const mapDispatchToProps = (dispatch:any) => {
  return {
    productActions: {
      getProductListAction: (params:any) => dispatch(getProductListAction(params)),
    },
  };
};
 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
