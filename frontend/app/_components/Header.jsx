"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import {
  CircleUserRound,
  LayoutGrid,
  LogInIcon,
  Search,
  ShoppingBagIcon,
  ShoppingBasket,
} from "lucide-react";
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
import { useState, use } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UpdateCartContext } from "../_context/UpdateCartContext";

function Header() {
  const [menuCategory, setMenuCategory] = React.useState([]);
  const isLogin = sessionStorage.getItem("jwt") ? true : false;
  const user = JSON.parse(sessionStorage.getItem("user"));
  const { updateCart, setUpdateCart } = useContext(UpdateCartContext);
  const jwt = sessionStorage.getItem("jwt");
  const [totalCartItem, setTotalCartItem] = useState(0);
  const router = useRouter();

  useEffect(() => {
    getMenuCategory();
  }, []);
  useEffect(() => {
    getCartItems();
  }, [updateCart]);
  const getMenuCategory = () => {
    GlobalApi.getMenuCategory().then((response) => {
      console.log("List", response.data.data);
      setMenuCategory(response.data.data);
    });
  };
  /**
   * used to get total cart items
   */
  const getCartItems = () => {
    const cartItemList = GlobalApi.getCartItems(user.id, jwt);
    console.log(cartItemList);
    setTotalCartItem(cartItemList?.length);
  };

  const onSignOut = () => {
    sessionStorage.clear();
    router.push("/sign-in");
  };

  return (
    <div className="flex p-2 gap-10 justify-between items-center">
      <div>
        <Image src="/images/logo.avif" alt="Next.js" width={65} height={65} />
      </div>
      <div className="hidden md:flex gap-5 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="flex gap-5 items-center border rounded-full p-2 px-10 bg-blue-400">
              <LayoutGrid className="h-5 w-5" />
              Categories
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Product Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {menuCategory.map((Category, index) => (
              <Link key={index} href={"/products-category/" + Category.name}>
                <DropdownMenuItem key={index}>
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                      Category.icon.url
                    }
                    alt="logo"
                    width={30}
                    height={30}
                  />
                  <h2>{Category.name}</h2>
                </DropdownMenuItem>
              </Link>
            ))}
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
      <div className="flex gap-5 items-center ">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingBasket className="h-7 w-7" />{" "}
          <span className="bg-primary text-white  px-2 rounded-full">
            {totalCartItem}
          </span>
        </h2>
        {!isLogin ? (
          <Link href={"/sign-in"}>
            <Button>Log in</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CircleUserRound
                className="bg-green-100 text-primary h-12 w-12 p-2 rounded-full cursor-pointer
        "
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>My Order</DropdownMenuItem>
              <DropdownMenuItem onClick={() => onSignOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

export default Header;
