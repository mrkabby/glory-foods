import React from "react";
import useGoogleSheetData from "../components/Usehooks";

const Impact = () => {
  const tabName = "Impact";
  const range = "A2:D10"; // Adjust range to cover all data rows (A to D)
  const [data, error] = useGoogleSheetData(tabName, range);

  // Default data in case fetching fails
  const defaultStatistics = [
    { percentage: "26%", text: "Default statistic text 1" },
    { percentage: "90%", text: "Default statistic text 2" },
    { percentage: "41%", text: "Default statistic text 3" },
  ];

  const defaultTestimonials = [
    { quote: "Default quote 1", author: "Default author 1" },
    { quote: "Default quote 2", author: "Default author 2" },
  ];

  // Process data for statistics (columns A and B)
  const statistics = data
    ? data
        .filter((row) => row[0] && row[1]) // Ensure both percentage and text are present
        .map(([percentage, text]) => ({ percentage, text }))
    : defaultStatistics;

  // Process data for testimonials (columns C and D)
  const testimonials = data
    ? data
        .filter((row) => row[2] && row[3]) // Ensure both quote and author are present
        .map(([, , quote, author]) => ({ quote, author })) // Skip columns A and B
    : defaultTestimonials;

  if (error) {
    console.error("Error fetching Impact Section data:", error);
  }

  return (
    <section id="impact" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold text-green-700 text-center mb-10">
          Forming Lasting Relationships, Building Capacity
        </h2>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-3xl font-bold text-green-700">{stat.percentage}</h3>
              <p className="mt-4 text-gray-600">{stat.text}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <p className="italic text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="text-green-700 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
