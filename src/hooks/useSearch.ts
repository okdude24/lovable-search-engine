import { useState, useCallback } from "react";
import { SearchResultData } from "@/components/SearchResult";
import { searchApi } from "@/lib/api/search";
import { useToast } from "@/hooks/use-toast";

export const useSearch = () => {
  const [results, setResults] = useState<SearchResultData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");
  const [totalResults, setTotalResults] = useState(0);
  const { toast } = useToast();

  const search = useCallback(async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    setCurrentQuery(query);

    try {
      const response = await searchApi.search(query, {
        limit: 10,
        lang: 'fa',
        country: 'IR',
      });

      if (response.success && response.results) {
        setResults(response.results);
        setTotalResults(response.totalResults || response.results.length);
      } else {
        toast({
          title: "خطا در جستجو",
          description: response.error || "مشکلی در جستجو رخ داد",
          variant: "destructive",
        });
        setResults([]);
        setTotalResults(0);
      }
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "خطا",
        description: "ارتباط با سرور برقرار نشد",
        variant: "destructive",
      });
      setResults([]);
      setTotalResults(0);
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  return {
    results,
    isLoading,
    hasSearched,
    currentQuery,
    totalResults,
    search,
  };
};
