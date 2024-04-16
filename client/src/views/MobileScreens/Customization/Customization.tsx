import React from "react";
import customImg from "../../../assets/images/custom-images/custom";
import Styles from "./custom.module.css";
import Video from '../../../assets/videos/customization website banner video 8.mp4';
import AppButton from "../../../components/Buttons/Button";
import HeadBar from "../../../components/HeadBar/HeadBar";

interface CustomizationStep {
  title: string;
  images: string[];
  description: string;
  step: string;
}

const customizationSteps: CustomizationStep[] = [
  {
    title: "Exploring Styles",
    images: [customImg.img2, customImg.img1, customImg.img3],
    description:
      "Start by exploring different styles. Create your own style checklist and try on dresses to discover your preferences. This helps in finding your perfect dress, allowing you to clearly define what exactly you are looking for and clearly state what you like and don’t like in your attire.This initial phase shapes the unique mood board of your vision.",
    step: "STEP 1",
  },
  {
    title: "Design Finalization",
    images: [customImg.img5, customImg.img4, customImg.img6],
    description:
      "Whether you are crystal clear or still in doubt, you and an ellemora designer will sit along over a video call to finalize the attire based on your preferences, budget and latest trends. After selecting the final design, we proceed to the exciting phase of bringing your dream outfit to life.",
    step: "STEP 2",
  },
  {
    title: "Fabric & Embellishment Selection",
    images: [customImg.img8, customImg.img7, customImg.img9],
    description:
      "Virtual discussions focus on refining styles, choosing fabrics, and discussing details like embroidery and colour pairings. After finalising decisions and gathering precise measurements, we send a test fit sample along with fabrics and embroidery samples to your doorstep for final approval.",
    step: "STEP 3",
  },
  {
    title: "Fit Finalisation",
    images: [customImg.img11, customImg.img10, customImg.img12],
    description:
      "In this crucial step, you will receive a draft box with your test fit sample, fabric, embroidery, lacework, and more. This offers a preview of your dress’s final look and once approved, the final garment stitching process begins.",
    step: "STEP 4",
  },
  {
    title: "Outfit Debut",
    images: [customImg.img14, customImg.img13, customImg.img15],
    description:
      "Your dream outfit becomes a reality. With meticulous attention to detail, your dress is crafted, packed, and sent to you, ready for you to wear on your special day.",
    step: "STEP 5",
  },
];

const Customization: React.FC = () => {
  return (
    <div className="">
      <HeadBar header="Customization" />
      <div>
      <video autoPlay loop muted playsInline className={` w-100 mt-3`} src={Video}></video>
       {/* <h2 className={`${Styles.head} text-center p-4 m-3 fs-3`}>A TALE OF TAILORMADE DREAMS</h2> */}
      </div>
      {customizationSteps.map((step, index) => (
        <div className="row" key={index}>
          <div className="container mt-1">
            <div className={`${Styles.span} text-center py-1 mt-3 `}>{step.step}</div>
            <div className={`${Styles.title} text-center p-2 m-1 `}>{step.title}</div>
          </div>
          <div className={`${Styles.imageContainer} d-flex justify-content-center`}>
            {step.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className={`img-responsive ${
                  i === 1 ? `${Styles.scaleUp}` : `${Styles.imgNormal}`
                } conatiner`}
              />
            ))}
          </div>
          <div className={`${Styles.description} container mt-5 text-center`}>
            <p>{step.description}</p>
          </div>
        </div>
      ))}
      <div className={`w-100 mt-4 text-center border-bottom border-top border-2 p-2 mb-2`}>
        <h3 className={`${Styles.appointhead} mt-5`}>Experience Style Beyond Imagination</h3>
        <p className={`${Styles.appointpara} my-4`}>We craft your journey, From customised masterpieces to an extensive selection. From the finery touch to the elegance that embraces your pocket.</p>
        <AppButton
        label="BOOK APPOINTMENT"
        className={`${Styles.AppButton} w-50 mb-5 py-4`}
        bgColor="rgba(44, 44, 44, 1)"
        color="rgba(255, 255, 255, 1)"
        border="0.5px solid rgba(169, 169, 169, 1)"
         />
      </div>
      <div className={`conatiner text-center p-1 m-1`}>
        <h3 className={`${Styles.whyhead} mt-3 py-2`}>WHY ELLEMORA?</h3>
        <p className={`${Styles.whypara} py-1`}>Your dream outfit becomes a reality. With meticulous attention to detail, your dress is crafted, packed, and sent to you, ready for you to wear on your special day.</p>
      </div>
    </div>
  );
};

export default Customization;
