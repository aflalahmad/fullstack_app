'use client'
import GlobalApi from '@/app/_utilities/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { useEffect, useState } from "react";



function TopCategoryList() {
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
    <div className="flex gap-5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
    {CategoryList.map((Category, index) => (
      <Link
        href={"/products-category/" + Category.name}
        className="flex flex-col items-center rounded-lg gap-2 mt-2 group border shadow cursor-pointer hover:bg-[#00bcd4] bg-[#0098a6] hover:scale-110 transition-all ease-in-out duration-500
        w-[150px] min-w-[100px]"
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
  )
}

export default TopCategoryList
