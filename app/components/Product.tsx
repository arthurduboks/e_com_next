"use client";

import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";
import AddCart from "@/app/product/[id]/AddCart";
import StarRating from "./StarRating";

export default function Product({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: ProductType) {
  const { features } = metadata;

  return (
    <div>
      <div className="product-container">
        {/* Just the image and information within the Link */}
        <Link
          href={{
            pathname: `/product/${id}`,
            query: { name, image, unit_amount, id, description, features },
          }}
        >
          <div>
            <Image
              src={image}
              alt={name}
              width={800}
              height={800}
              className="w-full h-96 object-cover rounded-lg"
              priority={true}
            />
            <div className="font-medium py-2">
              <h1>{name}</h1>
              <div className="py-2">
                <StarRating value={4} />
              </div>
              <h2 className="text-sm text-primary">
                {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
              </h2>
            </div>
          </div>
        </Link>

        {/* AddCart outside of the clickable div */}
        <AddCart name={name} image={image} id={id} unit_amount={unit_amount} />
      </div>
    </div>
  );
}
