import type { ICard } from "@/types/card.types";
import { motion } from "framer-motion";

interface Props {
  card: ICard;
}
export function BoardCard({ card }: Props) {
  return (
    <motion.button
      className="h-[11.3rem] w-32  shadow-2xl  mx-1 rounded-lg"
      initial={{ scale: 1, zIndex: 0 }}
      animate={{ scale: 1.1, zIndex: 10 }}
      transition={{ type: "spring", stiffness: 210, damping: 35 }}
    >
      <img alt={card.name} src={card.imageUrl} />
    </motion.button>
  );
}
