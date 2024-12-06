import React from "react";
import useGoogleSheetData from "../components/Usehooks";

const Products = () => {
  const tabName = "Products";
  const range = "A2:C4"; // Adjust range to cover all products
  const [data, error] = useGoogleSheetData(tabName, range);

  const defaultProducts = [
    { name: " ", description: " ", image: " " },
    { name: " ", description: " ", image: " " },
    { name: " ", description: " ", image: " " },
  ];

  const products = data
    ? data.map(([name, description, image]) => ({ name, description, image }))
    : defaultProducts;

  if (error) {
    console.error("Error fetching Products data:", error);
  }

  return (
    <section id="products" className="p-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
