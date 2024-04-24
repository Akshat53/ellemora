import React, { useState, useEffect, useMemo } from "react";
import FilterBox from "../../../components/FilterBar";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { Col, Row, Spin } from "antd";
import {
  getProductListAction,
  selectProductAction,
} from "../../../store/products/products.actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { debounce } from "lodash";
import AppModal from "../../../components/AppModal/appModal";
import Filter from "../../../components/Filter/Filter";
import CategoriesBar from "../../../components/Categories";
const categories = [
  { id: 1, name: "Books" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Clothing" },
  { id: 4, name: "Food" },
  // Add more categories as needed
];

const ProductList: React.FC = (props) => {
  const { productActions, productStore } = props;
  const { getProductListAction, selectProductAction } = productActions;
  const {
    productsList,
    page,
    limit,
    sortBy,
    sizes,
    priceRange,
    orderBy,
    categoryId,
    colorsId,
    hasMore,
  } = productStore;
  const [view, setView] = useState("list");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (productsList.length === 0) {
      debouncedFetchData();
    }

    return () => debouncedFetchData.cancel();
  }, []);

  useEffect(() => {
    setProducts(productsList);
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      await xhrGetProductListAction(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const debouncedFetchData = debounce(fetchData, 100);

  const xhrGetProductListAction = (isFreshCall = false) => {
    console.log("hello bro calling", isFreshCall);
    let newProductList = productsList.splice();
    let newPage = page + 1;

    if (isFreshCall) {
      newProductList = [];
      newPage = 1;
    }

    const args = {
      page: newPage,
      limit,
      sortBy,
      orderBy,
      sizes,
      priceRange,
      categoryId,
      colorsId,
    };
    getProductListAction(args);
  };

  if (loading)
    return (
      <div className="d-flex jsutify-content-center align-items-center ">
        <Spin size="large" className="w-100 " />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-100 ">
      <FilterBox
        view={view}
        viewChange={(value) => setView(value)}
        onClick={handleClick}
      />
      {isModalOpen && (
        <AppModal onClose={toggleModal}>
          <div className="d-flex row p-3">
            <Filter />
          </div>
        </AppModal>
      )}
      <div className="d-flex justify-content-center">
      <CategoriesBar categories={categories} />
      </div>
      <InfiniteScroll
        dataLength={productsList.length || limit}
        next={xhrGetProductListAction}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        // below props only if you need pull down functionality
        // refreshFunction={this.refresh}
        // pullDownToRefresh
        // pullDownToRefreshThreshold={50}
        // pullDownToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>
        // }
        // releaseToRefreshContent={
        //   <h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>
        // }
      >
        <Row gutter={[8, 8]} className="m-0  d-flex justify-content-evenly">
          {products.map((product, index) => (
            <Col
              span={view === "list" ? 24 : 12}
              key={index}
              className="m-0 p-0"
            >
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
      </InfiniteScroll>
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
