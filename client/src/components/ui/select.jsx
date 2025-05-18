import React from "react";

export const Select = ({ value, onChange, children, className }) => (
  <select value={value} onChange={e => onChange(e.target.value)} className={className}>
    {children}
  </select>
);

export const SelectTrigger = ({ children }) => children;
export const SelectValue = ({ children }) => children;
export const SelectContent = ({ children }) => children;
export const SelectItem = ({ value, children }) => (
  <option value={value}>{children}</option>
);
