import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import orderComplete from "@/public/order-complete.json";

export default function OrderAnimation() {
  return (
    <div className="flex items-center justify-center flex-col mt-24 p-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Getting your order ready 😍
      </motion.h1>
      <Player autoplay loop src={orderComplete}></Player>
    </div>
  );
}
