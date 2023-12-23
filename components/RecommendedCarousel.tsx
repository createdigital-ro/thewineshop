"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductItem from "./products";
import { CompleteWine } from "@/prisma/zod";
import Autoplay from "embla-carousel-autoplay";

const RecommendedCarousel = ({
  recommendedWines,
}: {
  recommendedWines: CompleteWine[];
}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {recommendedWines.map((w, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
            <ProductItem wine={w}></ProductItem>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default RecommendedCarousel;
