import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

const sizeClasses = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-6xl",
};

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-3xl",
  xl: "text-5xl",
};

export const Logo: React.FC<LogoProps> = ({ size = "md", showText = true }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`${sizeClasses[size]} animate-float`}>
        <span role="img" aria-label="عنکبوت">🕷️</span>
      </div>
      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-foreground`}>
          وب‌<span className="text-gradient">خزنده</span>
        </span>
      )}
    </div>
  );
};
