"use client";
import React, { useState } from "react";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

// assumes that the prop is of the same length for titles and image links

type Props = {
  titles: string[];
  imgLinks: string[];
};

const CarouselComponent = (props: Props) => {
  const [idx, setIdx] = useState(0);

  const next = () => {
    setIdx((idx + 1) % props.titles.length);
  };

  const prev = () => {
    setIdx((idx + props.titles.length - 1) % props.titles.length);
  };

  return (
    <div className="my-16 mx-8 space-y-8">
      <Carousel next={next} prev={prev} className="" autoPlay={false}>
        {props.titles.map((title, index) => {
          return (
            <Paper
              key={index}
              className="flex justify-center items-center border-2 rounded-xl"
            >
              {props.imgLinks[index] && (
                <Image
                  src={props.imgLinks[index]}
                  alt="carousel image"
                  width={200}
                  height={200}
                  className="absolute h-full w-full"
                />
              )}

              <div className="flex flex-col items-center justify-center gap-4 h-[200px]">
                <p className="text-xl">{title}</p>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
