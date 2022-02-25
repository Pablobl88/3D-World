import React, { useState} from 'react';
import ItemListSlide from "./NewSlide.jsx";

const NewContainer = () => {
  const Slides = [
    {
      title: "Proximos Ingresos",
      img: "https://i.ibb.co/C6FJsbk/chuky.jpg",
      id:1
    },
    {
      title: "Proximos Ingresos",
      img: "https://i.ibb.co/xmn5GN1/among-Us-White.jpg",
      id:2
    },
    {
      title: "Proximos Ingresos",
      img: "https://i.ibb.co/k4pkfS8/pikachu.jpg",
      id:3
    },
    {
      title: "Proximos Ingresos",
      img: "https://i.ibb.co/GMmxPjJ/batman.jpg",
      id:4
    },
  ];

  const [index, setIndex] = useState(0);
  
  const changeSlide = (i) => {
    setIndex(i);
  }

  return <NewSlide
            slide={slidesconst [index]}
            changeSlide={changeSlide}
            arrayIndex={slides.map(el=>el.id)}/>;
}

export default NewContainer