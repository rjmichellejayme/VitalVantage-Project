import React from "react";

export const Label = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <label className={className} ref={ref} {...props}>
      {children}
    </label>
  );
});

Label.displayName = "Label";
