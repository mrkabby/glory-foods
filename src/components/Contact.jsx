import React from "react";
import useGoogleSheetData from "../components/Usehooks"; // Ensure the path is correct

const ContactUs = () => {
  const [contactData, error] = useGoogleSheetData("Contact", "A:B"); // Fetch columns A and B from the "Contact" tab

  if (error) {
    return <p className="text-red-500 text-center">Failed to load contact data: {error}</p>;
  }

  // Convert fetched data to an object for easier access
  const content = contactData.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

  return (
    <section id="contact" className="relative bg-gray-900 text-white py-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={content.Background || "../assets/solardryer.jpg"} // Fallback to static image if not provided
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative container mx-auto text-center px-6">
        {/* Contact Us Header */}
        <h2 className="text-4xl font-bold mb-4 text-yellow-500">
          {content.Header || "CONTACT US"}
        </h2>
        <p className="text-lg mb-10">
          {content.SubText || "Need an expert? You are more than welcome to leave your contact info and we will be in touch shortly."}
        </p>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Visit Us */}
          <div className="flex flex-col items-center">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-gray-300">
              {content.Address || "2 Elizabeth St, London, UK"}
            </p>
          </div>

          {/* Call Us */}
          <div className="flex flex-col items-center">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-300">
              {content.Phone || "+44 (0) 203 116 7711"}
            </p>
          </div>

          {/* Email Us */}
          <div className="flex flex-col items-center">
            <div className="text-yellow-500 text-5xl mb-4">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="text-gray-300">
              {content.Email || "noreply@gloryfoods.com"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
