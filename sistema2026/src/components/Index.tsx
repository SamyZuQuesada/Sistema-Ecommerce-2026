import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, type = "text", placeholder }: InputProps) {
  return (
    <label>
      {label}
      <input type={type} placeholder={placeholder} />
    </label>
  );
}