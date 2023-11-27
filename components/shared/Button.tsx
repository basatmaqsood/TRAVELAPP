import React from "react";
import Image from "next/image";
type ButtonProps = {
  type: "button" | "submit";
  icon?: string;
  title: string;
  variant: string | "btn_dark_green";
};

function Button({ type, icon, title, variant }: ButtonProps) {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border cursor-pointer ${variant}`}
    >
      {icon && <Image src={icon} height={24} alt={title} width={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button> 
  );
}

export default Button;