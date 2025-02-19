'use client'
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";  // Import the Image component from next/image

function CartItemList({ cartItemList, onDeleteItem }) {
  

  return (
    <div>
      <div className="h-[500px] overflow-auto">
        {cartItemList.map((cart) => (
          <div key={cart.id} className="flex justify-between items-center p-2 mb-5">
            <div className="flex gap-6 items-center">
              <Image
               //src={process.env.NEXT_PUBLIC_BACKEND_BASE_URL + cart.image} // Make sure this is a valid URL
                width={90}
                height={90}
                alt={cart.name}
                className="border p-2"
              />
              <div>
                <h2 className="font-bold">{cart.name}</h2>
                <h2>{cart.quantity}</h2>
                <h2 className="text-lg font-bold">${cart.amount}</h2>
              </div>
              <TrashIcon
                className="cursor-pointer"
                onClick={() => onDeleteItem(cart.id)}
              />
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default CartItemList;
