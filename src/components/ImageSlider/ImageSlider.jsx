import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
    setCurrentSlide(index);
  };

  const updateSlider = () => {
    if (sliderRef.current) {
        sliderRef.current.slickGoTo(0);
    }
};

  useEffect(() => {
    // Обновляем слайдер при изменении размера окна
    window.addEventListener('resize', updateSlider);
    return () => {
        window.removeEventListener('resize', updateSlider);
    };
}, []);

  return (
    <div style={{ position: 'relative' }}> {/* Обстановка для абсолютного позиционирования дочерних элементов */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="direction__image" src={image} alt="фото с предущего года соревнований, передающие дух соревнований" />
          </div>
        ))}
      </Slider>
      <div className="custom-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`custom-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
