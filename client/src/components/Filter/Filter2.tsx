import React, { useState } from "react";
import AppButton from "../Buttons/Button";
import { Row, Col } from "antd";
import AppModal from "../AppModal/appModal";
import { setSortingFitlerAction } from "../../store/products/products.actions";
import { connect } from "react-redux";
import filter from "../../assets/svg/filter2.svg"
import sort from "../../assets/svg/sort.svg"

const sortOptions = [
  {
    label: "A-Z, Alphabetically",
    value: "name,asc",
  },
  {
    label: "Z-A, Alphabetically",
    value: "name,desc",
  },
  {
    label: "Price, Low to High",
    value: "price,asc",
  },
  {
    label: "Price, High to Low",
    value: "price,desc",
  },
  {
    label: "Date, Old to New",
    value: "updatedAt,asc",
  },
  {
    label: "Date, New to Old",
    value: "updatedAt,desc",
  },
];

const Filter2: React.FC = (props) => {
  const { productActions, productStore } = props;
  const { setSortingFitlerAction } = productActions;
  const { sortBy, sizes, priceRange, orderBy, categoryId, colorsId } =
    productStore;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = () => {
    setIsModalOpen(true);
  };
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSorting = (value: string) => {
    let sortingValues = value.split(",");
    setSortingFitlerAction({
      orderBy: sortingValues[1],
      sortBy: sortingValues[0],
    });
    window.scroll({ top: 0 });
    setIsModalOpen(false);
  };
  return (
    <>
      <Row
        className="position-fixed bottom-0 w-100 "
        style={{ zIndex: "1050" }}
      >
        <Col span={12} className="d-flex justify-content-center">
          
          <AppButton
            onClick={handleClick}
            label="Filter"
            border="none"
            bgColor="white"
            icon={filter}
            className="d-flex justify-content-center fw-600 fs-6 align-items-center gap-2"

          />
        </Col>
        <Col span={12}>
          <AppButton
            onClick={handleClick}
            label="Sort"
            border="none"
            bgColor="white"
            icon={sort}
            className="d-flex justify-content-center fw-600 fs-6 align-items-center gap-2"
          />
        </Col>
      </Row>
      <AppModal open={isModalOpen} onClose={toggleModal}>
        <ul className="list-unstyled">
          {sortOptions.map((item, i) => (
            <li key={i} onClick={() => handleSorting(item.value)}>
              <p>{item.label}</p>
            </li>
          ))}
        </ul>
      </AppModal>
    </>
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
      setSortingFitlerAction: (args: any) =>
        dispatch(setSortingFitlerAction(args)),
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter2);
