import React from "react";

export const Input = React.forwardRef(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={className}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
