import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    axios
      .get(`https://jericho-server-eb9k.onrender.com/gallery`)
      .then((res) => setGalleryData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const PrevArrow = ({ className, onClick }) => (
    <div className={`${className} custom-arrow prev-arrow`} onClick={onClick}>
      
    </div>
  );

  const NextArrow = ({ className, onClick }) => (
    <div className={`${className} custom-arrow next-arrow`} onClick={onClick}>
      
    </div>
  );

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    dots: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: () => (
      
    <span class="material-symbols-outlined">yard</span>
      
    ),
    centerPadding: '10px',
    slidesToShow: 3,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 2024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 1424,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 824,
        settings: { slidesToShow: 1, initialSlide: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, initialSlide: 2 }
      }
    ]
  };

  return (
    <div className="h_carousel">
      <h2>Happy Holidays!</h2>
      {visible && <p>Swipe to see more photos..</p>}
      <div className="sliderWrapper">
        <Slider {...settings}>
          {galleryData.map((item) => (
            <div className="home_gallery_card" key={item.id}>
              <div className="home_photo_gallery_container">
                <img
                  src={item.img_url}
                  className="home_gallery_photo"
                  alt={item.alt_text}
                  title={item.name}
                />
                <span className="photo_name">{item.name}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      
    </div>
  );
}

export default Gallery;
