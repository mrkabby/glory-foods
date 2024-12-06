import React from "react";
import useGoogleSheetData from "../components/Usehooks";

const AboutUs = () => {
  const tabName = "About"; // Tab name in the Google Sheet
  const range = "A1:B10"; // Range for fetching data
  const [data, error] = useGoogleSheetData(tabName, range);

  // Default content in case data fails to load
  const defaultContent = {
    heading: "",
    paragraph1:
      ".",
    paragraph2:
      "",
    bullet1: "",
    bullet2: "",
    bullet3: "",
    image: "",
  };

  // Process fetched data
  const content =
    data && data.length > 0
      ? {
          heading: data.find((row) => row[0] === "Heading")?.[1] || defaultContent.heading,
          paragraph1: data.find((row) => row[0] === "Paragraph1")?.[1] || defaultContent.paragraph1,
          paragraph2: data.find((row) => row[0] === "Paragraph2")?.[1] || defaultContent.paragraph2,
          bullet1: data.find((row) => row[0] === "Bullet1")?.[1] || defaultContent.bullet1,
          bullet2: data.find((row) => row[0] === "Bullet2")?.[1] || defaultContent.bullet2,
          bullet3: data.find((row) => row[0] === "Bullet3")?.[1] || defaultContent.bullet3,
          image: data.find((row) => row[0] === "Image")?.[1] || defaultContent.image,
        }
      : defaultContent;

  // Handle error state
  if (error) {
    console.error("Error fetching About Us data:", error);
  }

  return (
    <section id="about" className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
            {content.heading}
          </h2>
          <p className="text-gray-600 mb-6">{content.paragraph1}</p>
          <p className="text-gray-600 mb-6">{content.paragraph2}</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <span className="font-semibold">Farmers:</span> {content.bullet1}
            </li>
            <li>
              <span className="font-semibold">Communities:</span> {content.bullet2}
            </li>
            <li>
              <span className="font-semibold">The Planet:</span> {content.bullet3}
            </li>
          </ul>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center relative">
          <div className="relative">
            <img
              src={content.image}
              alt="About Us"
              className="rounded-full shadow-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 bg-yellow-400 h-6 -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
