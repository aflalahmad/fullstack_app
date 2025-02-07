"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "../_utilities/GlobalApi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Bookmark, Heart, ShoppingBag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductListDetail from "./ProjectListDetail";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);

  const getProductList = () => {
    GlobalApi.getProductList().then((response) => {
      console.log("Product List", response.data.data);
      setProductList(response.data.data);
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="category mb-6 text-3xl font-semibold text-teal-800">
        Product List
      </h2>
      <div className="flex overflow-x-auto gap-8">
        {productList.map((product, index) => (
          <div
            key={index}
            className="flex-none w-64 bg-white border rounded-lg shadow-md p-4 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL + product.image[0].url
              }
              alt={product.name}
              width={200}
              height={200}
              className="w-full h-48 object-cover rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              {product.name}
            </h3>
            <div className="flex flex-col items-center">
              {product.mrp && product.sellingprice !== 0 ? (
                <>
                  <span className="text-sm font-medium text-gray-500 line-through mb-2">
                    ₹{product.mrp}
                  </span>
                  <span className="text-xl font-bold text-teal-800">
                    ₹{product.sellingprice}
                  </span>
                </>
              ) : (
                <span className="text-xl font-bold text-teal-800">
                  ₹{product.mrp}
                </span>
              )}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              {product.categories.map((category, CatIndex) => (
                <span key={CatIndex} className="block">
                  {category.name}
                </span>
              ))}
            </div>

            <div className="mt-4 flex justify-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-blue-300 hover:bg-blue-400 p-2"
                  >
                    <Bookmark />
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="text-blue-800 hover:text-white hover:bg-blue-800 border-blue-800 px-4"
                  >
                    <ShoppingBag className="mr-2" />
                    Add to Cart
                  </Button>
                </DialogTrigger>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="bg-blue-300 hover:bg-blue-400 p-2"
                  >
                    <Heart />
                  </Button>
                </DialogTrigger>

                <DialogContent className="bg-gray-100 shadow-lg rounded-lg p-6 border border-gray-300">
                  <DialogHeader>
                    <DialogTitle className="text-lg font-bold text-blue-800">
                      Product Details
                    </DialogTitle>
                    <DialogDescription className="text-gray-600 text-sm mt-2">
                      <ProductListDetail product={product} />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
