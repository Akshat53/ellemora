import { connect } from "react-redux";
import Categories from "../../../components/Categories";
import { getProductListAction } from "../../../store/products/products.actions";
import HeroSection from "../../../components/HeroSection/HeroSection";


const Home = (props: any) => {
  const { productStore, productActions } = props;

  console.log(productActions, productStore, "state with actions");
  return (
    <div className="w-full">
      <Categories />
      <HeroSection />
     
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
