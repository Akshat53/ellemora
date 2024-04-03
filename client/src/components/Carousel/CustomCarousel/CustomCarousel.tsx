


import Slider from "react-slick";
import ProductCard from "../../ProductCard/ProductCard";

interface homeCarouselProps {
  data: {
    img: string;
    text: string;
    link: string;
  };
}

const CustomCarousel: React.FC<homeCarouselProps> = ({ data, view }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
  };
  return (
    <Slider {...settings}>
          {data.map((items, i) => (
      <div>
    

        <ProductCard data={items} view={view}/>


      </div>
        ))}

    </Slider>
    // <Carousel
    //   additionalTransfrom={0}
    //   arrows={false}
    //   autoPlaySpeed={3000}
    //   centerMode={false}
    //   className=""
    //   containerClass="container"
    //   dotListClass=""
    //   draggable
    //   focusOnSelect={false}
    //   infinite
    //   itemClass=""
    //   keyBoardControl
    //   minimumTouchDrag={80}
    //   partialVisible
    //   pauseOnHover
    //   renderArrowsWhenDisabled={false}
    //   renderButtonGroupOutside={false}
    //   renderDotsOutside={false}

    //   responsive={{
    //     desktop: {
    //       breakpoint: {
    //         max: 3000,
    //         min: 1024,
    //       },
    //       items: 3,
    //       partialVisibilityGutter: 40,
    //     },
    //     mobile: {
    //       breakpoint: {
    //         max: 464,
    //         min: 0,
    //       },
    //       items: 1,
    //       partialVisibilityGutter: 60,
    //     },
    //     tablet: {
    //       breakpoint: {
    //         max: 1024,
    //         min: 464,
    //       },
    //       items: 2,
    //       partialVisibilityGutter: 30,
    //     },
    //   }}
    //   rewind={false}
    //   rewindWithAnimation={false}
    //   rtl={false}
    //   shouldResetAutoplay
    //   showDots={false}
    //   sliderClass=""
    //   slidesToSlide={0}
    //   swipeable
    // >
    //   {data.map((items, i) => (

    //         <ProductCard data={items} view={view}/>

    //   ))}
    // </Carousel>
  );
};

export default CustomCarousel;
