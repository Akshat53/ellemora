import React from "react";
import EmptyBag from '../../../components/MyBag/EmptyBag/EmptyBag';
import FilledBag from "../../../components/MyBag/FilledBag/FillBag";
import HeadBar from "../../../components/HeadBar/HeadBar";
import LogCheck from "../../../components/Checkout/LoggedCheckout/LogCheck";

const BuyNow: React.FC = () => {
  return (
    <div>
      {/* <HeadBar header="My Bag" /> */}
      {/* {ProductList.length > 0 ? <FilledBag /> : <EmptyBag />} */}
      {/* <FilledBag /> */}
      {/* <EmptyBag /> */}
      <HeadBar header="CHECKOUT" />
      <LogCheck />
    </div>
  );
};

export default BuyNow;
