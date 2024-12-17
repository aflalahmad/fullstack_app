import React from "react";
import Image from "next/image";
import { LayoutGrid, LogInIcon, Search, ShoppingBagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="flex p-2 justify-between items-center">
      <div>
        <Image
          src="/images/logo.avif"
          alt="Next.js"
          width={65}
          height={65}
        />
      </div>
      <div className='hidden md:flex gap-2 items-center'>
        <h2 className='flex gap-2 items-center border rounded-full p-2 px-10 bg-blue-400'>
          <LayoutGrid className='h-5 w-5' />
          Categories
        </h2>
      </div>
      <div className='hidden md:flex gap-2 items-center'>
        <Search />
        <input
          type='text'
          placeholder='Search for products'
          className='border-2 border-gray-300 rounded-lg p-2'
        />
      </div>
      <div className='flex gap-2 items-center ml-auto'>
        <h2>
          <ShoppingBagIcon className="h-5 w-5" />
        </h2>
        <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from">
          <LogInIcon />
          LogIn
        </Button>
      </div>
    </div>
  );
}

export default Header;