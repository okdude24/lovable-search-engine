import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
  variant?: "hero" | "compact";
  isLoading?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  initialQuery = "",
  variant = "hero",
  isLoading = false,
}) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const clearQuery = () => {
    setQuery("");
  };

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={cn(
          "relative flex items-center w-full bg-card border border-border rounded-2xl transition-all duration-300",
          isHero
            ? "shadow-search hover:shadow-hover focus-within:shadow-hover"
            : "shadow-card hover:shadow-search focus-within:shadow-search",
          isHero ? "h-16" : "h-12"
        )}
      >
        <div className={cn("flex items-center justify-center text-muted-foreground", isHero ? "w-14" : "w-12")}>
          <Search className={cn(isHero ? "w-6 h-6" : "w-5 h-5")} />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجو در وب..."
          className={cn(
            "flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground font-vazir",
            isHero ? "text-lg" : "text-base"
          )}
          dir="rtl"
        />

        {query && (
          <button
            type="button"
            onClick={clearQuery}
            className="flex items-center justify-center w-10 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className={cn("px-2", isHero ? "pl-3" : "pl-2")}>
          <Button
            type="submit"
            variant="search"
            size={isHero ? "lg" : "default"}
            disabled={!query.trim() || isLoading}
            className="rounded-xl"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
            ) : (
              "جستجو"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};
