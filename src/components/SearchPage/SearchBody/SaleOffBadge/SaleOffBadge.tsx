import React, { FC } from "react";

export interface SaleOffBadgeProps {
  className?: string;
  desc?: string;
}

const SaleOffBadge: FC<SaleOffBadgeProps> = ({
  className = "",
  desc = "New",
}) => {
  return (
    <div
      className={`nc-SaleOffBadge flex items-center justify-center text-xs py-1 px-3 bg-gray-100 text-gray-800 rounded-md hover:text-gray-100 hover:bg-black font-display font-semibold ${className}`}
      data-nc-id="SaleOffBadge"
    >
      {desc}
    </div>
  );
};

export default SaleOffBadge;
