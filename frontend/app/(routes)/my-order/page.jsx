"use client";
import GlobalApi from "@/app/_utilities/GlobalApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function MyOrder() {
  const jwt = sessionStorage.getItem("jwt");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const router = useRouter();
  const [orderList,setOrderList]=useState([]);
  useEffect(() => {
    if (!jwt) {
      router.replace("/");
    }
    getMyOrder();
  }, []);

  const getMyOrder = async () => {
    const orderList_ = await GlobalApi.getMyOrder(user.id, jwt);
    console.log(orderList_);
    setOrderList(orderList_)
  };

  return (
    <div>
      <h2 className="p-3 bg-primary text-xl font-bold text-center text-white">
        My Order
      </h2>
      <div className="py-8 mx-7 md:mx-20">
        <h2 className="text-3 font-bold text-primary">Order History</h2>
        <div>
          {orderList.map((item,index)=>(
            <Collapsible>
          <CollapsibleTrigger>
          <div>
            <h2>Order Date:{item?.createdAt}</h2>
          </div>
          </CollapsibleTrigger>
          <CollapsibleContent>
            Yes. Free to use for personal and commercial projects. No
            attribution required.
          </CollapsibleContent>
        </Collapsible>
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default MyOrder;
