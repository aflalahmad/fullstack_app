import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Slider from "./_components/Slider";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Banner from "./_components/Banner";

export default async function Home() {

  
  return (
    <div>
     <Slider />
     <CategoryList />
     <ProductList />
     <Banner />
     
    </div>
  );
}