"use client";

import { AddCartType } from "@/types/AddCartType";
import { useCartStore } from "@/store";
import { useState } from "react";

export default function AddCart(props: AddCartType) {
  const { name, id, image, unit_amount, quantity } = props;
  const cartStore = useCartStore();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    cartStore.addProduct({ id, name, unit_amount, quantity, image });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 500);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={handleAddToCart}
        disabled={added}
        className="my-4 btn btn-primary w-full"
      >
        {!added && <span>Add to cart</span>}
        {added && <span>Adding to cart 😀</span>}
      </button>
    </div>
  );
}
