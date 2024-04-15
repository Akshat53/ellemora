import React from "react";
import Styles from "./footer.module.css";
import SupportIcon from "../../assets/svg/message.svg";
import cod from "../../assets/svg/cod.svg";
import offer from "../../assets/svg/offers.svg";
import gift from "../../assets/svg/gift.svg";
import { DownOutlined } from "@ant-design/icons";
import visaIcon from "../../assets/svg/visa.svg";
import masterCardIcon from "../../assets/svg/mastercard.svg";
import paypalIcon from "../../assets/svg/paypal.svg";
import facebookIcon from "../../assets/svg/facebook.svg";
import twitterIcon from "../../assets/svg/twitter.svg";
import instagramIcon from "../../assets/svg/instagram.svg";
import playStoreIcon from "../../assets/svg/playstore.png";
import appStoreIcon from "../../assets/svg/appstore.png";

import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Link } from "react-router-dom";

const socialOptions = [
  {
    icon: twitterIcon,
    link: "https://www.x.com/",
  },
  {
    icon: facebookIcon,
    link: "https://www.facebook.com/",
  },
  {
    icon: instagramIcon,
    link: "https://www.instagram.com/",
  },
];

const downloadOptions = [
  {
    link: "",
    icon: playStoreIcon,
  },
  {
    link: "",
    icon: appStoreIcon,
  },
];
const paymentOptions = [visaIcon, masterCardIcon, paypalIcon];

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <>
        <div className="d-flex justify-content-between mt-1">
          <p className={`m-0 p-0 fs-6 fw-medium ${Styles.labelpara}`}>COLLECTIONS</p>

          <div>
            <DownOutlined />
          </div>
        </div>
      </>
    ),
    children: (
      <ul className={`${Styles.list}`}>
        <Link to={"/lehnga"} className="text-decoration-none">
          <li>Lehenga</li>
        </Link>
        <Link to={"/saree"} className="text-decoration-none">
          <li>Saree</li>
        </Link>
        <Link to={"/drapes"} className="text-decoration-none">
          <li>Drapes</li>
        </Link>
        <Link to={"/jumpsuit"} className="text-decoration-none">
          <li>JumpSuit</li>
        </Link>
        <Link to={"/gown"} className="text-decoration-none">
          <li>Gown</li>
        </Link>
      </ul>
    ),
    showArrow: false,
  },
  {
    key: "2",
    label: (
      <>
        <div className="d-flex justify-content-between mt-1">
          <p className={`m-0 p-0 fs-6 fw-medium ${Styles.labelpara}`}>QUICK LINKS</p>
          <div>
            <DownOutlined />
          </div>
        </div>
      </>
    ),
    children:    <ul className={`${Styles.list}`}>
    <Link to={"/aboutus"} className="text-decoration-none">
      <li>About Us</li>
    </Link>
    <Link to={"/contactus"} className="text-decoration-none">
      <li>Contact Us</li>
    </Link>
    <Link to={"/sizeguide"} className="text-decoration-none">
      <li>Size Guide</li>
    </Link>
    <Link to={"/bestseller"} className="text-decoration-none">
      <li>Best Seller</li>
    </Link>
    <Link to={"/giftcard"} className="text-decoration-none">
      <li>Gift Card</li>
    </Link>
  </ul>,
    showArrow: false,
  },
  {
    key: "3",
    label: (
      <>
        <div className="d-flex justify-content-between mt-1">
          <p className={`m-0 p-0 fs-6 fw-medium ${Styles.labelpara}`}>FINE PRINT</p>
          <div>
            <DownOutlined />
          </div>
        </div>
      </>
    ),
    children:    <ul className={`${Styles.list}`}>
    <Link to={"/cancellationpolicy"} className="text-decoration-none">
      <li>cancellation policy</li>
    </Link>
    <Link to={"/privacypolicy"} className="text-decoration-none">
      <li>privacy policy</li>
    </Link>
    <Link to={"/refundandreturnspolicy"} className="text-decoration-none">
      <li>refund and returns policy</li>
    </Link>
    <Link to={"/shippingpolicy"} className="text-decoration-none">
      <li>shipping policy</li>
    </Link>
    <Link to={"/termsandconditions"} className="text-decoration-none">
      <li>terms and conditions</li>
    </Link>
  </ul>,
    showArrow: false,
  },
  {
    key: "4",
    label: (
      <>
        <div className="d-flex justify-content-between mt-1">
          <p className={`m-0 p-0 fs-6 fw-medium ${Styles.labelpara}`}>FAQ</p>

          <div>
            <DownOutlined />
          </div>
        </div>
      </>
    ),
    showArrow: false,
  },
];

const specialityOptions = [
  {
    img: SupportIcon,
    label: (
      <>
        FREE SHIPPING IN INDIA
      </>
    ),
  },
  {
    img: cod,
    label: (
      <>
        COD AVAILABLE
      </>
    ),
  },
  {
    img: offer,
    label: (
      <>
        EXCITING OFFERS
      </>
    ),
  },
  {
    img: gift,
    label: (
      <>
        EXCITING OFFERS
      </>
    ),
  },
];

const Footer: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="d-flex justify-content-center w-100 ">
      <div className={`py-0 ${Styles.footer} mt-5 w-100`}>
        <div className={`d-flex justify-content-between row py-4 ${Styles.spec}`}>
          {specialityOptions.map((item, i) => (
            <div
              key={i}
              className={`col-6 d-flex flex-column justify-content-center align-items-center ${Styles.speciality}`}
            >
              <img src={item.img} width={"19px"} height={"19.58px"} className={`${Styles.specimg}`}/>
              <p className={`${Styles.label} mt-2`}>{item.label}</p>
            </div>
          ))}
        </div>
        <div className={`${Styles.quickLinks}`}>
          <Collapse
            ghost
            items={items}
            className="bg-white border-0 rounded-0 w-100 "
            onChange={onChange}
          />
        </div>
        <div className={`${Styles.bottom} text-center`}>
          <p className={` ${Styles.bottomUpper} fw-medium text-center m-1`}>
            Sign up to our Newsletter
          </p>
          <p className={`${Styles.bottomMid} fw-normal `}>
            10% off on new by subscribing to our newsletter
          </p>
          <div className=" d-flex justify-content-center gap-3 ">
            <input className="border-0 border-bottom w-50" />
            <button className="border-0 bg-black text-light p-1 px-4 fw-medium">
              Subscribe
            </button>
          </div>
          <p className={`${Styles.fs1} mt-2 fw-normal m-0 p-0`}>
            COMPLETELY SAFE & SECURE TRANSACTIONS
          </p>
          <p className={`${Styles.fs2} m-1 p-0 fw-normal`}>
            We accept Netbanking, all major credit cards.
            <br /> We also accept orders with cash payment.
          </p>
          <div className="d-flex justify-content-center gap-4 mt-4">
            {paymentOptions.map((icon, i) => (
              <img src={icon} key={i} />
            ))}
          </div>
          <div className="d-flex justify-content-center gap-4 mt-3">
            {downloadOptions.map((item, key) => (
              <a href={item.link} key={key}>
                <img src={item.icon} height={"28px"} width={"92px"} />
              </a>
            ))}
          </div>
          <p className={`${Styles.fs2} fw-normal mt-4`}>Follow Us</p>
          <div className="d-flex justify-content-center gap-3">
            {socialOptions.map((social, i) => (
              <a href={social.link} key={i}>
                <img src={social.icon} width={"30px"} height={"16px"} />
              </a>
            ))}
          </div>
          <p className={`fw-normal ${Styles.fs3} mt-2`}>
            © 2024 Ellemora - All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
