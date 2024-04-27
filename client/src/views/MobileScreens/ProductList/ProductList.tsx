import React, { useState, useEffect } from "react";
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
import CategoriesBar from "../../../components/Categories";
import Filter2 from "../../../components/Filter/Filter2";
import { getCategoriesListAction } from "../../../store/categories/category.actions";
const categories = [
  { id: 1, name: "Books" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Clothing" },
  { id: 4, name: "Food" },
  // Add more categories as needed
];

const ProductList: React.FC = (props) => {
  const { productActions, productStore, categoryStore, categoryActions } =
    props;
  const { getProductListAction, selectProductAction } = productActions;
  const { getCategoriesListAction } = categoryActions;
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
  const { categories } = categoryStore;

  const [view, setView] = useState("list");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    debouncedFetchData();

    return () => debouncedFetchData.cancel();
  }, [sortBy, sizes, priceRange, orderBy, categoryId, colorsId]);

  useEffect(() => {
    setProducts(productsList);
  });
  useEffect(() => {
    getCategoriesListAction();
  }, []);

  // useEffect(() => {
  //   xhrGetProductListAction(true);
  // }, [sortBy, sizes, priceRange, orderBy, categoryId, colorsId]);

  const fetchData = async () => {
    console.log("hello bro get new products ");
    setLoading(true);
    try {
      await xhrGetProductListAction(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchData = debounce(fetchData, 100);

  const xhrGetProductListAction = (isFreshCall = false) => {
    console.log("hello bro calling", isFreshCall);
    let newProductsList = products;
    let newPage = page + 1;

    if (isFreshCall) {
      newProductsList = [];
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
    getProductListAction(args, newProductsList);
  };

  if (loading)
    return (
      <div className="d-flex jsutify-content-center align-items-center ">
        <Spin size="large" className="w-100 " />
      </div>
    );
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="w-100 position-relative">
      <FilterBox view={view} viewChange={(value) => setView(value)} />
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
      <Filter2 />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    productStore: state.productStore,
    authStore: state.authStore,
    categoryStore : state.categoryStore
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    productActions: {
      getProductListAction: (params: any, list: any) =>
        dispatch(getProductListAction(params, list)),
      selectProductAction: (id: string) => dispatch(selectProductAction(id)),
    },
    categoryActions: {
      getCategoriesListAction: (params: any) =>
        dispatch(getCategoriesListAction(params)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
