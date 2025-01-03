'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import { LayoutGrid, LogInIcon, Search, ShoppingBagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GlobalApi from "../_utilities/GlobalApi";
import { useState } from "react";


function Header() {
  
  const [menuCategory, setMenuCategory] = React.useState([]);

 useEffect(() => {
  getMenuCategory();
 },[]);

  const getMenuCategory = () => {
    GlobalApi.getMenuCategory().then((response) => {
      console.log('List',response.data.data);
      setMenuCategory(response.data.data);
  });
}

  return (
    <div className="flex p-2 gap-10 justify-between items-center">
      <div>
        <Image
          src="/images/logo.avif"
          alt="Next.js"
          width={65}
          height={65}
        />
      </div>
      <div className='hidden md:flex gap-5 items-center'>
       
        <DropdownMenu>
  <DropdownMenuTrigger asChild>
  <h2 className='flex gap-5 items-center border rounded-full p-2 px-10 bg-blue-400'>
          <LayoutGrid className='h-5 w-5' />
          Categories
        </h2>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Product Category</DropdownMenuLabel>
    <DropdownMenuSeparator />
    {menuCategory.map((Category,index) => (
    <DropdownMenuItem key={index}>

    <Image
    src={
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL + Category.icon.url
    }
    alt='logo'
    width={30}
    height={30}
    />
    <h2>{Category.name}</h2>
    </DropdownMenuItem>))}
    
    
  </DropdownMenuContent>
</DropdownMenu>

      </div>
      <div className="hidden md:flex gap-5 items-center">
        <Search />
        <input
          type="text"
          placeholder="Search for products"
          className="border-2 border-teal-500 rounded-lg p-2"
        />
      </div>
      <div className="flex gap-5 items-center ml-auto">
        <h2>
          <ShoppingBagIcon className="h-5 w-5" /> 0
        </h2>
        <Button className="bg-gradient-to-r from-teal-700 to-teal-500 hover:from-emerald-400 hover:to-teal-800">
          <LogInIcon /> Log in
        </Button>
      </div>
    </div>
  );
}

export default Header;
