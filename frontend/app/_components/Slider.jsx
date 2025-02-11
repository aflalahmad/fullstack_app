import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";

function Slider() {
  return (
    <div className="hidden sm:grid">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700">
              <div className="flex flex-col justify-center gap-6">
                <Badge className="hidden lg:inline-block mb-4 text-[#00bcd4] bg-transparent">
                  Get 20% discount
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  All Your Daily Needs
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                  Get all your daily needs at one place
                </p>
                <Button
                  className="bg-[#00bcd4] text-white px-6 py-3 mt-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#0098a6]"
                  variant="outline"
                  size="lg"
                >
                  <ShoppingBasket className="mr-2" /> Buy Now
                </Button>
              </div>
              <div className="w-full">
                <img
                  src="/images/S2.jpg"
                  alt="Banner 1"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700">
              <div className="flex flex-col justify-center gap-6">
                <Badge className="hidden lg:inline-block mb-4 text-[#00bcd4] bg-transparent">
                  Get 20% discount
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  All Your Daily Needs
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                  Get all your daily needs at one place
                </p>
                <Button
                  className="bg-[#00bcd4] text-white px-6 py-3 mt-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#0098a6]"
                  variant="outline"
                  size="lg"
                >
                  <ShoppingBasket className="mr-2" /> Buy Now
                </Button>
              </div>
              <div className="w-full">
                <img
                  src="/images/S3.jpg"
                  alt="Banner 2"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-700">
              <div className="flex flex-col justify-center gap-6">
                <Badge className="hidden lg:inline-block mb-4 text-[#00bcd4] bg-transparent">
                  Get 20% discount
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  All Your Daily Needs
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">
                  Get all your daily needs at one place
                </p>
                <Button
                  className="bg-[#00bcd4] text-white px-6 py-3 mt-6 rounded-lg transition-all duration-300 ease-in-out hover:bg-[#0098a6]"
                  variant="outline"
                  size="lg"
                >
                  <ShoppingBasket className="mr-2" /> Buy Now
                </Button>
              </div>
              <div className="w-full">
                <img
                  src="/images/S1.jpg"
                  alt="Banner 3"
                  className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 text-[#00bcd4] bg-[#f0f7f8] hover:bg-[#e1f5f7] p-2 rounded-full shadow-lg" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 text-[#00bcd4] bg-[#f0f7f8] hover:bg-[#e1f5f7] p-2 rounded-full shadow-lg" />
      </Carousel>
    </div>
  );
}

export default Slider;
