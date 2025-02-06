'use client'
import React from "react";
import GlobalApi from "../_utilities/GlobalApi";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

function CategoryList() {
  const [CategoryList, setMenuCategory] = React.useState([]);

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
    <div className="m-4 gap-8 text-bold text-[#00bcd4] text-3xl font-bold items-center">
      Product Category
      <div className="m-4 grid grid-cols-8 md:grid-cols-19 lg:grid-cols-25 gap-8 items-center justify-between">
        {CategoryList.map((Category, index) => (
          <Link
            href={"/products/" + Category.name}
            className="flex flex-col items-center rounded-lg gap-2 mt-2 group border shadow cursor-pointer hover:bg-[#00bcd4] bg-[#0098a6] hover:scale-110 transition-all ease-in-out duration-500"
            key={index}
          >
            <div>
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + Category.icon.url}
                alt="Category"
                width={100}  // Adjusted width
                height={100} // Adjusted height
                className="rounded-full" // Optional: for rounded image
              />
            </div>
            <h2 className="text-white text-base group-hover:text-white">
              {Category.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
