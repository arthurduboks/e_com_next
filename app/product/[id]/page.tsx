import Image from "next/image";
import { SearchParamType } from "@/types/SearchParamType";
import formatPrice from "@/util/PriceFormat";
import AddCart from "./AddCart";
import LiveVisitorCount from "@/app/components/LiveVisitorCount";
import StarRating from "@/app/components/StarRating";

export default async function Product({ searchParams }: SearchParamType) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4 md:gap-16">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={800}
        height={800}
        className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0"
        priority={true}
      />
      <div className="font-medium w-full md:w-1/2 lg:mt-20">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <div className="pb-2">
          <StarRating value={4} />
        </div>
        <p className="font-bold text-primary">
          {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
        </p>
        <p className="py-2">{searchParams.description}</p>
        <p className="py-2">{searchParams.features}</p>
        <div className="flex gap-2">
          <div className="flex items-center gap-2">
            <span className="w-4 h-4 bg-green-500 rounded-full inline-block"></span>
            <span className="text-green-700">In Stock</span>
          </div>
          <div className="flex items-center justify-center">
            <LiveVisitorCount />
          </div>
        </div>
        <AddCart {...searchParams} />
      </div>
    </div>
  );
}
