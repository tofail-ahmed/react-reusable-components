import React, { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../utils/cn";

type TRef = HTMLButtonElement;
type TVariant = "solid" | "ghost" | "outline"| null | undefined;
type TButtonoptions = {
  variant?: TVariant;
};
type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonoptions;

const Button = forwardRef<TRef,TButton>(({ className,variant,title="Title", ...rest },ref) => {
  const getVariant = (variant:TVariant) => {
    switch (variant) {
      case "outline":
        return "btn-outline";
      case "solid":
        return "btn-solid";
      case "ghost":
        return "btn-ghost";

      default:
        return "btn-primary";
    }
  };
  return (
    <div>
      <button ref={ref} {...rest} className={cn(getVariant(variant), className)}>
        {title}
      </button>
    </div>
  );
});

export default Button;
