import React from "react";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const images = [
    {
      id: 1,
      src: "https://icharity.in/wp-content/uploads/2017/10/image_7-1.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://icharity.in/wp-content/uploads/2017/10/image_7-1.jpg",
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: "https://icharity.in/wp-content/uploads/2017/10/image_7-1.jpg",
      alt: "Image 3",
    },
  ];
  return (
    <section className="p-3 lg:flex items-center justify-evenly">
      <div className="w-[800px]">
        <Carousel images={images} />
      </div>
      <Sidebar />
    </section>
  );
};

export default Home;
