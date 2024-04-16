import img1 from "./item1.png";
import img2 from "./item2.png";
import img3 from "./item3.png";
import img4 from "./item4.png";
import img5 from "./item5.png";
import img6 from "./item6.png";


interface Images {
  [key: string]: string;
}

const img: Images = { img1, img2, img3, img4, img5, img6 };

export default img;
