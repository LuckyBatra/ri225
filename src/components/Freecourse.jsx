
import list from "../list.json"
import Cards from "../components/Cards"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function Freecourse() {
    const filterData = list.filter((data) => data.category === "free");
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
    <div>
        <h1> Free Courses</h1>
        <p> 
            This courses are free when avilable
        </p>
    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item) => (
            <Cards item={item} key={item.id} />
                   ))}
      </Slider>
    </div>
    </>
  )
}

export default Freecourse