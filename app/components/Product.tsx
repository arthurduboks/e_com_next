"use client";

import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";
import { motion } from "framer-motion";
import AddCart from "@/app/product/[id]/AddCart";

export default function Product({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: ProductType) {
  const { features } = metadata;
  const queryId = id;

  return (
    <div>
      <div className="product-container">
        {/* Just the image and information within the Link */}
        <Link
          href={{
            pathname: `/product/${id}`,
            query: { name, image, unit_amount, queryId, description, features },
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
              <h2 className="text-sm text-primary">
                {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
              </h2>
            </div>
          </div>
        </Link>

        {/* AddCart outside of the clickable div */}
        <AddCart
          name={name}
          image={image}
          id={queryId}
          unit_amount={unit_amount}
        />
      </div>
    </div>
  );
}
