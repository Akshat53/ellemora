
import img1 from "./item1.png";
import img2 from "./item2.png";
import img3 from "./item3.png";
import img5 from "./item5.png";
import img6 from "./item6.png";
import img7 from "./item7.png";

interface Images {
  [key: string]: string;
}

const img: Images = { img1, img2, img3, img5, img6, img7 };

export default img;
