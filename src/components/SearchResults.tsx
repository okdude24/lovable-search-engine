import React from "react";
import { SearchResult, SearchResultData } from "./SearchResult";
import { Loader2 } from "lucide-react";

interface SearchResultsProps {
  results: SearchResultData[];
  isLoading: boolean;
  query: string;
  totalResults?: number;
}

export const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  isLoading,
  query,
  totalResults,
}) => {
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-16 gap-4">
        <Loader2 className="w-10 h-10 text-primary animate-spin" />
        <p className="text-muted-foreground">در حال جستجو...</p>
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
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-muted-foreground pb-2 border-b border-border">
        <p>
          حدود{" "}
          <span className="font-semibold text-foreground">
            {totalResults?.toLocaleString("fa-IR") || results.length.toLocaleString("fa-IR")}
          </span>{" "}
          نتیجه برای «<span className="font-medium text-foreground">{query}</span>»
        </p>
      </div>

      <div className="space-y-3">
        {results.map((result) => (
          <SearchResult key={result.id} result={result} />
        ))}
      </div>
    </div>
  );
};
