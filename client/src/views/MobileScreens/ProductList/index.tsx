import React, { useState, useEffect } from "react";
import FilterBox from "../../../components/FilterBox";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Col, Row, Spin } from "antd";
import {
  getProductListAction,
  selectProductAction,
} from "../../../store/products/products.actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductList: React.FC = (props) => {
  const { productActions, productStore } = props;
  const { getProductListAction, selectProductAction } = productActions;
  const { productsList } = productStore;
  const [view, setView] = useState("list");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    getProductListAction()
      .catch((error: any) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setProducts(productsList);
  });

  if (loading)
    return (
      <div className="d-flex jsutify-content-center align-items-center ">
       
        <Spin size="large" className="w-100 " />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    
    <div className="w-100 ">
      <FilterBox view={view} viewChange={(value) => setView(value)} />
      <Row gutter={[8, 8]} className="m-0  d-flex justify-content-evenly">
        {products.map((product, index) => (
          <Col span={view === "list" ? 24 : 12} key={index} className="m-0 p-0">
            <ProductCard
              data={product}
              view={view}
              onClick={() => {
                navigate(`/product/${product.id}`);
                selectProductAction(product.id);
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    productStore: state.productStore,
    authStore: state.authStore,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    productActions: {
      getProductListAction: (params: any) =>
        dispatch(getProductListAction(params)),
      selectProductAction: (id: string) => dispatch(selectProductAction(id)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
