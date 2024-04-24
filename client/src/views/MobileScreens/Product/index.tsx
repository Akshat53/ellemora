import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import { useParams } from "react-router-dom";
import ProductCard from "../../../components/ProductCard/ProductCard";
import CustomCollapse from "../../../components/Collapse/Collapse";
import Styles from "./product.module.css";
import {
  getProductByIdAction,
  selectProductAction,
} from "../../../store/products/products.actions";
import { connect } from "react-redux";

interface ProductData {
  title: string;
  discount: string;
  description: string;
  discountedPrice: number;
  originalPrice: string;
  img: string[];
  colour: string[];
}

interface CollapseOption {
  header: string;
  description?: string;
  content: Array<{
    title: string | null;
    subContent: string;
  }>;
  categories?: string[];
}

const Product: React.FC = (props) => {
  const { productActions, productStore } = props;
  const { getProductByIdAction } = productActions;
  const { selectedProduct, selectedProductOptions } = productStore;

  const [productData, setProductData] = useState<ProductData>(null);
  const [collapseOptions, setCollapseOptions] = useState<CollapseOption[]>([]);
  const { productId } = useParams<{ productId: string }>();

  useEffect(() => {
    if (!selectedProduct) {
      getProductByIdAction(productId);
    }
  }, [productId]);

  useEffect(() => {
    setCollapseOptions(selectedProductOptions);
    setProductData(selectedProduct);
  }, [selectedProduct, selectedProductOptions]);
  console.log(selectedProduct)

  const handleColor = (clicked: string) => {
    console.log(clicked);
  };

  if (!productData) return <div>Loading...</div>;

  return (
    <Row justify="center" className={`${Styles.product}`}>
      <Col span={24}>
        <ProductCard
          data={productData}
          view={"product"}
          onClick={() => console.log("Product clicked")}
          colors={(clickedColor) => handleColor(clickedColor)}
        />
      </Col>

      <Col span={24} className="border-top border-1 border-bottom">
        <CustomCollapse collapseOptions={collapseOptions} />
      </Col>
    
    </Row>
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
      getProductByIdAction: (id: any) => dispatch(getProductByIdAction(id)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
