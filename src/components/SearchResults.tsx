import React from "react";
import { SearchResult, SearchResultData } from "./SearchResult";
import { Loader2, AlertCircle } from "lucide-react";

interface SearchResultsProps {
  results: SearchResultData[];
  isLoading: boolean;
  query: string;
  totalResults?: number;
  error?: string;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isLoading,
  query,
  totalResults,
  error,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <div className="relative">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
          <span className="absolute inset-0 flex items-center justify-center text-2xl">🕷️</span>
        </div>
        <p className="text-muted-foreground">در حال خزیدن در وب...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-foreground mb-2">
          خطا در جستجو
        </h3>
        <p className="text-muted-foreground">{error}</p>
      </div>
    );
  }

  if (!query) {
    return null;
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          نتیجه‌ای یافت نشد
        </h3>
        <p className="text-muted-foreground">
          برای «{query}» نتیجه‌ای پیدا نشد. لطفاً عبارت دیگری را امتحان کنید.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground pb-2 border-b border-border">
        <p>
          حدود{" "}
          <span className="font-semibold text-foreground">
            {totalResults?.toLocaleString("fa-IR") || results.length.toLocaleString("fa-IR")}
          </span>{" "}
          نتیجه برای «<span className="font-medium text-foreground">{query}</span>»
        </p>
      </div>

      <div className="space-y-2 sm:space-y-3">
        {results.map((result) => (
          <SearchResult key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};
