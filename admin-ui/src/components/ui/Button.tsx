import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "ghost" | "default";
  size?: "sm" | "md" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", disabled, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:opacity-50 disabled:pointer-events-none rounded-lg select-none";
    
    const variants = {
      primary: "bg-[#0b5daa] text-white hover:bg-[#094c8b] shadow-sm active:bg-[#073c6f]",
      default: "bg-[#0b5daa] text-white hover:bg-[#094c8b] shadow-sm active:bg-[#073c6f]",
      secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60 active:bg-slate-300",
      outline: "border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700",
      danger: "bg-rose-600 text-white hover:bg-rose-700 active:bg-rose-800 shadow-sm",
      ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs gap-1.5",
      md: "h-9 px-4 text-sm gap-2",
      lg: "h-11 px-6 text-base gap-2.5",
      icon: "h-8 w-8 p-0",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

