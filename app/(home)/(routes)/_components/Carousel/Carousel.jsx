import React, { useState } from "react";
import CarouselItem from "./CarouselItem";
import Image from "next/image";
import "../index.css";
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Carou1",
      description: "blah blah",
      pic: require("../CarouPic/Carou1.jpg"),
    },
    {
      title: "Carou2",
      description: "blah blah",
      pic: require("../CarouPic/Carou2.jpg"),
    },
    {
      title: "Carou3",
      description: "blah blah",
      pic: require("../CarouPic/Carou3.jpg"),
    },
    {
      title: "Carou4",
      description: "blah blah",
      pic: require("../CarouPic/HomeSchool.jpg"),
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel ">
      <div
        className="inner"
        style={{ transform: `translate: (-${activeIndex * 100})` }}
      >
        {items.map((item) => {
          return <CarouselItem key={item.title} item={item} />;
        })}
      </div>
      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
