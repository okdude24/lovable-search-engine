import React from "react";
import { Logo } from "./Logo";

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo size="sm" />
          
          <p className="text-sm text-muted-foreground">
            جستجوی هوشمند، نتایج دقیق
          </p>

          <p className="text-xs text-muted-foreground">
            © ۱۴۰۴ وب‌خزنده - تمامی حقوق محفوظ است
          </p>
        </div>
      </div>
    </footer>
  );
};
