import React, { useEffect, useState } from "react";
import heic2any from "heic2any";
import Slider from "react-slick";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import GalleryHero from "components/hero/GalleryHero.js";
import Footer from "components/footers/Footer.js";

const Carousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const importAll = (r) => r.keys().map(r);
      const allFiles = importAll(
        require.context("../images/gallery/", false, /\.(png|jpe?g|svg|heic)$/)
      );

      const convertedImages = await Promise.all(
        allFiles.map(async (file) => {
          if (file.endsWith(".heic")) {
            try {
              const response = await fetch(file);
              const blob = await response.blob();
              const convertedBlob = await heic2any({ blob, toType: "image/jpeg" });
              return URL.createObjectURL(convertedBlob);
            } catch (error) {
              console.error("Error converting HEIC image:", error);
              return null; // Handle errors gracefully
            }
          }
          return file; // For non-HEIC files
        })
      );

      setImages(convertedImages.filter(Boolean)); // Remove null entries
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  return (
    <div style={{ width: "50%", margin: "0 auto", marginTop: "20vh" }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt=""/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default () => {
  return (
    <AnimationRevealPage disabled>
      <GalleryHero />
      <Carousel />
      <Footer />
    </AnimationRevealPage>
  );
};