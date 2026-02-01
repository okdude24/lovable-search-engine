import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="py-4 sm:py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center md:flex-row md:justify-between md:text-right">
          <Logo size="sm" />
          
          <p className="text-xs sm:text-sm text-muted-foreground">
            جستجوی هوشمند، نتایج دقیق
          </p>

          <p className="text-[10px] sm:text-xs text-muted-foreground">
            © ۱۴۰۴ وب‌خزنده - تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
};
