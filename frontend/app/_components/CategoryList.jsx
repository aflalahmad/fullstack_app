"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utilities/GlobalApi";
import Image from "next/image";
import Link from "next/link";

function CategoryList() {
  const [CategoryList, setMenuCategory] = useState([]);

  useEffect(() => {
    getMenuCategory();
  }, []);

  const getMenuCategory = () => {
    GlobalApi.getMenuCategory().then((response) => {
      console.log("List", response.data.data);
      setMenuCategory(response.data.data);
    });
  };

  return (
    <div className="m-6 text-center">
      <h2 className="text-4xl font-bold text-[#3a4344] mb-6">Product Categories</h2>
      
      <div className="flex justify-center">
        <div className="inline-flex gap-x-6 bg-[#f0f0f0] px-8 py-6 rounded-lg shadow-lg w-fit">
          {CategoryList.map((Category, index) => (
            <Link
              href={`/products-category/${Category.name}`}
              key={index}
              className="flex flex-col items-center p-6 rounded-lg shadow-lg cursor-pointer bg-[#cce5ff] hover:bg-[#0077b6] transition-all duration-300 transform hover:scale-110 min-w-[140px]"
            >
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + Category.icon.url}
                alt={Category.name}
                width={100}  // Increased size
                height={100} // Increased size
                className="rounded-full shadow-md"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-3 group-hover:text-white">
                {Category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
