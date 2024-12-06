import React from "react";
import useGoogleSheetData from "../components/Usehooks"; // Ensure this path is correct

const Footer = () => {
  const [footerData, error] = useGoogleSheetData("Footer", "A:B"); // Fetch columns A and B

  if (error) {
    return <p className="text-red-500 text-center">Failed to load footer data: {error}</p>;
  }

  // Convert fetched data into an object for easy access
  const footerContent = footerData.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return (
    <footer className="bg-green-600 text-white py-6">
      <div className="container mx-auto text-center">
        {/* Footer Text */}
        <p className="mb-4">{footerContent.Text || "© 2024 Glory Foods. All Rights Reserved."}</p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          {footerContent.Facebook && (
            <a
              href={footerContent.Facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
          )}
          {footerContent.Twitter && (
            <a
              href={footerContent.Twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
          )}
          {footerContent.Instagram && (
            <a
              href={footerContent.Instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
          )}
          {footerContent.LinkedIn && (
            <a
              href={footerContent.LinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
