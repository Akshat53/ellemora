// demo-product-images/index.tsx

import img1 from "./img1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";


interface Images {
  [key: string]: string;
}

const img: Images = { img1, img2, img3,img4 };

export default img;
