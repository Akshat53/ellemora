import React from "react";
import Styles from "./footer.module.css";
import SupportIcon from "../../assets/svg/message.svg";
import quality from "../../assets/svg/quality.svg"
import offer from "../../assets/svg/offers.svg"

const specialityOptions = [
  {
    img: SupportIcon,
    label: (
      <>
        24 x 7 <br />
        CUSTOMER <br /> SUPPORT{" "}
      </>
    ),
  },
  {
    img: quality,
    label: (
      <>
        PREMIUM <br />
        QUALITY <br /> DESIGNS{" "}
      </>
    ),
  },
  {
    img: offer,
    label: (
      <>
       EXCITING<br />
       OFFERS
      </>
    ),
  },
];

const Footer: React.FC = () => {
  return (
    <div className="d-flex justify-content-center w-100" >
    <div
      className={`p-3 ${Styles.footer} mt-5 w-100`}
    >
      <div className={`d-flex justify-content-between px-3 ${Styles.spec}`}>
        {specialityOptions.map((item) => (
          <div
            className={`w-25 d-flex justify-content-center align-items-center text-center flex-column  ${Styles.speciality}`}
          >
            <img src={item.img} width={"19px"} height={"19.58px"} />
            <p className={`fw-medium mt-2`}>{item.label}</p>
          </div>
        ))}
      </div>
      <div>vfvs</div>
      <div>vsdf</div>
    </div>
    </div>
  );
};

export default Footer;
