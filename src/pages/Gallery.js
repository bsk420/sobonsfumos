import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Slider from "react-slick";

import GalleryHero from "components/hero/GalleryHero.js";
import Footer from "components/footers/Footer.js";

const Carousel = () => {
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
    <div style={{ width: "50%", margin: "0 auto", marginTop: '20vh'}}>
      <Slider {...settings}>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/TOMAS-1.JPG"
            alt="SBF #1"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_7105.JPG"
            alt="SBF #4"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_7100.JPG"
            alt="SBF #5"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_7099.JPG"
            alt="SBF #6"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_7098.JPG"
            alt="SBF #7"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_7098.JPG"
            alt="SBF #8"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_7007.JPG"
            alt="SBF #9"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6964.JPG"
            alt="SBF #10"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6963.JPG"
            alt="SBF #11"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6952.JPG"
            alt="SBF #13"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6951.JPG"
            alt="SBF #14"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6860.JPG"
            alt="SBF #15"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6858.JPG"
            alt="SBF #16"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6849.JPG"
            alt="SBF #17"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6848.JPG"
            alt="SBF #18"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6748.JPG"
            alt="SBF #19"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6704.jpg"
            alt="SBF #20"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6703.jpg"
            alt="SBF #21"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6701.JPG"
            alt="SBF #22"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6665.JPG"
            alt="SBF #23"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6629.JPG"
            alt="SBF #24"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6626.JPG"
            alt="SBF #25"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6625.JPG"
            alt="SBF #26"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6580.JPG"
            alt="SBF #27"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6487.JPG"
            alt="SBF #28"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6455.JPG"
            alt="SBF #29"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6453.JPG"
            alt="SBF #30"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6451.JPG"
            alt="SBF #31"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6379.JPG"
            alt="SBF #32"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6080.JPG"
            alt="SBF #33"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6079.JPG"
            alt="SBF #34"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_6075.JPG"
            alt="SBF #35"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_5983.JPG"
            alt="SBF #36"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_5071.JPG"
            alt="SBF #37"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_5045.JPG"
            alt="SBF #38"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_5034.JPG"
            alt="SBF #39"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_4267.JPG"
            alt="SBF #40"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_2866.JPG"
            alt="SBF #41"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_2347.JPG"
            alt="SBF #42"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_2343.JPG"
            alt="SBF #43"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_2326.JPG"
            alt="SBF #44"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_2323.jpg"
            alt="SBF #45"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_1482.JPG"
            alt="SBF #46"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/F86DBE34-5D20-4CC7-8D49-776EC63A4B97.JPG"
            alt="SBF #47"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/C30CAFB8-0890-4A10-BF36-CCF35E0761E6.JPG"
            alt="SBF #48"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/818BC0D3-FFAB-441D-975B-A60A2F72BDD2.JPG"
            alt="SBF #50"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_0407.JPG"
            alt="SBF #51"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_0406.JPG"
            alt="SBF #52"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_1228.JPG"
            alt="SBF #53"
          />
        </div>
        <div>
          <img
            src="https://files.yetanotherdude.xyz/sharex/ShareX/2024/10/IMG_1235.JPG"
            alt="SBF #54"
          />
        </div>
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
