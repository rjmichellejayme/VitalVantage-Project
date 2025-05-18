import React from "react";

export const Button = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <button className={className} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

