import React from "react";
import Image from "next/image";
const CarouselItem = ({ item, width }) => {
  return (
    // <div className="courousel-item ">
    //   <div className="">
    //     <Image className="carousel-img" src={item.pic.default} alt="dsd" />
    //   </div>

    //   <div className="carousel-item-text">{item.description}</div>
    // </div>
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <Image className="carousel-img" src={item.pic.default} alt="sdsd" />
      <div className="carousel-item-text">{item.description}</div>
    </div>
  );
};

export default CarouselItem;
