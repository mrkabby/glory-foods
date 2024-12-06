import React from "react";
import useGoogleSheetData from "../components/Usehooks";

const Hero = () => {
  const tabName = "Hero";
  const range = "A2:C2";
  const [data, error] = useGoogleSheetData(tabName, range);

  const defaultContent = {
    title: " ",
    description: " ",
    image: " ",
  };

  const content =
    data && data.length > 0
      ? {
          title: data[0][0],
          description: data[0][1],
          image: data[0][2],
        }
      : defaultContent;

  if (error) {
    console.error("Error fetching Hero Section data:", error);
  }

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: `url(${content.image})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          {content.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-lg mx-auto">
          {content.description}
        </p>
        <button className="bg-green-500 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-green-700 transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
