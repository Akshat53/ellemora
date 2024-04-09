import img1 from './item1.png';
import img2 from './item2.png';

interface Images {
    [key: string]: string;
}

const img: Images = { img1, img2 };

export default img;