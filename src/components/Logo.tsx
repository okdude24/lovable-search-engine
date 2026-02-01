import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
}

const sizeClasses = {
  sm: "text-lg sm:text-xl",
  md: "text-xl sm:text-2xl",
  lg: "text-3xl sm:text-4xl",
  xl: "text-4xl sm:text-6xl",
};

const textSizeClasses = {
  sm: "text-base sm:text-lg",
  md: "text-lg sm:text-xl",
  lg: "text-2xl sm:text-3xl",
  xl: "text-3xl sm:text-5xl",
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
