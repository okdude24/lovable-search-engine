import React from "react";
import { ExternalLink } from "lucide-react";

export interface SearchResultData {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  description: string;
}

interface SearchResultProps {
  result: SearchResultData;
}

export const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <article className="group p-3 sm:p-5 bg-card rounded-lg sm:rounded-xl border border-border shadow-card hover:shadow-hover transition-all duration-300">
      <a
        href={result.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="flex items-start gap-2 sm:gap-3 mb-1.5 sm:mb-2">
          <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-md sm:rounded-lg flex items-center justify-center">
            <img
              src={`https://www.google.com/s2/favicons?domain=${result.displayUrl}&sz=32`}
              alt=""
              className="w-3 h-3 sm:w-4 sm:h-4"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] sm:text-xs text-muted-foreground truncate" dir="ltr">
              {result.displayUrl}
            </p>
          </div>
          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
        </div>

        <h3 className="text-base sm:text-lg font-semibold text-primary group-hover:text-primary/80 mb-1.5 sm:mb-2 line-clamp-2 transition-colors">
          {result.title}
        </h3>

        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {result.description}
        </p>
      </a>
    </article>
  );
};
