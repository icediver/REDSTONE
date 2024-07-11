import { ICard } from "@/types/card.types";
import { getStyleRotation } from "@/utils/getStyleRotation.util";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  card: ICard;
  onClick: () => void;
  isDisabled?: boolean;
  isHided?: boolean;
  style?: React.CSSProperties;
  index: number;
  arrayLength: number;
}

export function GameCard({
  card,
  isDisabled,
  isHided,
  onClick,
  style,
  index,
  arrayLength,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const { rotate, translateY } = getStyleRotation(index, arrayLength, !isHided);
  const initialAnitation = { scale: 1, zIndex: 0, y: translateY, rotate };
  return (
    <motion.button
      className={clsx(
        "h-[8.5rem] w-24  inline-block -ml-7 rounded-lg will-change-transform",
        {
          shadow: isHided,
          "opacity-50": isDisabled,
        },
      )}
      style={style}
      disabled={isDisabled}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ scale: 1, zIndex: 0, y: 0 }}
      animate={
        isHovered && !isHided
          ? { scale: 1.3, zIndex: 10, y: -95 }
          : initialAnitation
      }
      transition={{ type: "spring", stiffness: 210, damping: 35 }}
    >
      <img
        src={isHided ? "/assets/cards/cover.png" : card.imageUrl}
        alt={card.name}
        draggable="false"
      />
    </motion.button>
  );
}
