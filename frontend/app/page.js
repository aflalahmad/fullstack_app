import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Slider from "./_components/Slider";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <div>
     <Slider />
     <CategoryList />
     <ProductList />
    </div>
  );
}