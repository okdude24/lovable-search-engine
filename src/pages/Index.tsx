import React, { useState } from "react";
import { Logo } from "@/components/Logo";
import { SearchBar } from "@/components/SearchBar";
import { SearchResults } from "@/components/SearchResults";
import { QuickLinks } from "@/components/QuickLinks";
import { Footer } from "@/components/Footer";
import { useSearch } from "@/hooks/useSearch";

const Index = () => {
  const { results, isLoading, hasSearched, currentQuery, search } = useSearch();
  const [searchView, setSearchView] = useState(false);

  const handleSearch = (query: string) => {
    setSearchView(true);
    search(query);
  };

  if (!searchView) {
    return (
      <div className="min-h-screen flex flex-col web-pattern">
        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
          <div className="w-full max-w-2xl mx-auto text-center space-y-8">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Logo size="xl" />
            </div>

            {/* Tagline */}
            <p className="text-lg text-muted-foreground mb-8">
              جستجوی هوشمند در گستره وب فارسی
            </p>

            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} variant="hero" />

            {/* Quick Links */}
            <div className="pt-8">
              <QuickLinks onSearch={handleSearch} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto py-4">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setSearchView(false)}
              className="flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <Logo size="sm" />
            </button>

            <div className="flex-1 max-w-2xl">
              <SearchBar
                onSearch={handleSearch}
                initialQuery={currentQuery}
                variant="compact"
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Results */}
      <main className="flex-1 container mx-auto py-6">
        <div className="max-w-2xl">
          <SearchResults
            results={results}
            isLoading={isLoading}
            query={currentQuery}
            totalResults={results.length * 1000}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
