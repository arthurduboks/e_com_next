import Image from "next/image";
import { SearchParamType } from "@/types/SearchParamType";
import formatPrice from "@/util/PriceFormat";
import AddCart from "./AddCart";

export default async function Product({ searchParams }: SearchParamType) {
  return (
    <div className="flex flex-col 2xl:flex-row items-center justify-between gap-16">
      <Image
        src={searchParams.image}
        alt={searchParams.name}
        width={800}
        height={800}
        className="w-full sm:w-1/2 rounded-lg"
        priority={true}
      />
      <div className="font-medium">
        <h1 className="text-2xl py-2">{searchParams.name}</h1>
        <p className="py-2 w-1/7">{searchParams.description}</p>
        <p className="py-2 w-1/7">{searchParams.features}</p>
        <div className="flex gap-2">
          <p className="font-bold text-primary">
            {searchParams.unit_amount && formatPrice(searchParams.unit_amount)}
          </p>
        </div>
        <AddCart {...searchParams} />
      </div>
    </div>
  );
}
