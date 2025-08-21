import React from "react";

const ProductList = ({ products }) => {
  return (
    
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-gray-900 text-white">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-64 border p-4 rounded-lg shadow hover:shadow-lg flex flex-col items-center"
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h2 className="text-lg font-bold mt-2">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
