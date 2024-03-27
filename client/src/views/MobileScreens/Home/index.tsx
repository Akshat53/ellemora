import { connect } from "react-redux";
import Categories from "../../../components/Categories";
import { getProductListAction } from "../../../store/products/products.actions";

const Home = (props: any) => {
  const { productStore, productActions } = props;

  console.log(productActions, productStore, "state with actions");
  return (
    <div className="w-full">
      <Categories />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productStore: state.productStore,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    productActions: {
      getProductListAction: (params) => dispatch(getProductListAction(params)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
