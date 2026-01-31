import { useState, useCallback } from "react";
import { SearchResultData } from "@/components/SearchResult";

// Mock search data - in production, this would come from a backend API
const mockResults: SearchResultData[] = [
  {
    id: "1",
    title: "ویکی‌پدیا - دانشنامه آزاد",
    url: "https://fa.wikipedia.org",
    displayUrl: "fa.wikipedia.org",
    description: "ویکی‌پدیا یک دانشنامه آزاد و چندزبانه است که با مشارکت کاربران نوشته می‌شود. این دانشنامه شامل میلیون‌ها مقاله در موضوعات مختلف است.",
  },
  {
    id: "2",
    title: "خبرگزاری ایرنا - اخبار ایران و جهان",
    url: "https://www.irna.ir",
    displayUrl: "irna.ir",
    description: "خبرگزاری جمهوری اسلامی ایران (ایرنا) یکی از معتبرترین منابع خبری کشور است که اخبار سیاسی، اقتصادی، اجتماعی و فرهنگی را پوشش می‌دهد.",
  },
  {
    id: "3",
    title: "دیجی‌کالا - فروشگاه آنلاین",
    url: "https://www.digikala.com",
    displayUrl: "digikala.com",
    description: "بزرگترین فروشگاه اینترنتی ایران با میلیون‌ها کالا در دسته‌بندی‌های مختلف از الکترونیک تا مد و پوشاک با تضمین اصالت کالا.",
  },
  {
    id: "4",
    title: "آپارات - سرویس اشتراک ویدیو",
    url: "https://www.aparat.com",
    displayUrl: "aparat.com",
    description: "آپارات بزرگترین سرویس اشتراک ویدیو ایرانی است که امکان تماشا و به اشتراک‌گذاری ویدیوهای متنوع را فراهم می‌کند.",
  },
  {
    id: "5",
    title: "نشر الکترونیکی فیدیبو - کتاب الکترونیکی",
    url: "https://www.fidibo.com",
    displayUrl: "fidibo.com",
    description: "فیدیبو بزرگترین فروشگاه کتاب الکترونیکی و صوتی فارسی با هزاران عنوان کتاب در موضوعات مختلف.",
  },
];

export const useSearch = () => {
  const [results, setResults] = useState<SearchResultData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [currentQuery, setCurrentQuery] = useState("");

  const search = useCallback(async (query: string) => {
    setIsLoading(true);
    setHasSearched(true);
    setCurrentQuery(query);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Filter mock results based on query (simple simulation)
    const filtered = mockResults.map((result) => ({
      ...result,
      id: `${result.id}-${Date.now()}`,
      title: result.title.includes(query) ? result.title : `${query} - ${result.title}`,
      description: `نتایج جستجو برای "${query}": ${result.description}`,
    }));

    setResults(filtered);
    setIsLoading(false);
  }, []);

  return {
    results,
    isLoading,
    hasSearched,
    currentQuery,
    search,
  };
};
