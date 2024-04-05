import React from "react";
import customImg from "../../../assets/images/custom-images/custom";
import Styles from "./custom.module.css";

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
        <div className="container">
            {customizationSteps.map((step, index) => (
                <div className="row" key={index}>
                    <div className="d-flex gap-3 justify-content-center p-3 m-2 align-items-end">
                        <div className={`${Styles.span}`}>{step.step}</div>
                        <div className={`${Styles.title} `}>{step.title}</div>
                    </div>
                    <div className={`${Styles.imageContainer} m-1`}>
                        {step.images.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt=""
                                className={` ${
                                    i === 1
                                        ? `${Styles.scaleUp} ${Styles.imgLarge}`
                                        : `${Styles.imgNormal}`
                                }`}
                            />
                        ))}
                    </div>
                    <div className={`${Styles.description} m-5`}>
                        <p>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Customization;
