import React from "react";
import { Newspaper, Image, Video, MapPin, ShoppingBag, BookOpen } from "lucide-react";

const links = [
  { icon: Newspaper, label: "اخبار", query: "اخبار روز ایران" },
  { icon: Image, label: "تصاویر", query: "تصاویر زیبا" },
  { icon: Video, label: "ویدیو", query: "ویدیوهای آموزشی" },
  { icon: MapPin, label: "نقشه", query: "نقشه تهران" },
  { icon: ShoppingBag, label: "خرید", query: "فروشگاه اینترنتی" },
  { icon: BookOpen, label: "کتاب", query: "کتاب الکترونیکی" },
];

interface QuickLinksProps {
  onSearch: (query: string) => void;
}

export const QuickLinks: React.FC<QuickLinksProps> = ({ onSearch }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
      {links.map((link) => (
        <button
          key={link.label}
          onClick={() => onSearch(link.query)}
          className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-card border border-border rounded-full text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:shadow-card transition-all duration-300"
        >
          <link.icon className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>{link.label}</span>
        </button>
      ))}
    </div>
  );
};
