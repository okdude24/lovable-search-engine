import React from "react";

export const SearchSkeleton: React.FC = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="p-5 bg-card rounded-xl border border-border shadow-card animate-pulse"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="w-8 h-8 bg-muted rounded-lg" />
            <div className="h-3 w-32 bg-muted rounded" />
          </div>
          <div className="h-5 w-3/4 bg-muted rounded mb-3" />
          <div className="space-y-2">
            <div className="h-3 w-full bg-muted rounded" />
            <div className="h-3 w-5/6 bg-muted rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};
