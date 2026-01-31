import { supabase } from '@/integrations/supabase/client';
import { SearchResultData } from '@/components/SearchResult';

interface SearchResponse {
  success: boolean;
  results?: SearchResultData[];
  totalResults?: number;
  error?: string;
}

interface SearchOptions {
  limit?: number;
  lang?: string;
  country?: string;
}

export const searchApi = {
  async search(query: string, options?: SearchOptions): Promise<SearchResponse> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 minute timeout

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/search`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            'apikey': import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
          },
          body: JSON.stringify({ query, options }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json();
        return { success: false, error: errorData.error || 'خطا در جستجو' };
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      console.error('Search error:', error);
      
      if (error instanceof Error && error.name === 'AbortError') {
        return { success: false, error: 'جستجو بیش از حد طول کشید. لطفاً دوباره تلاش کنید.' };
      }
      
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'خطا در جستجو' 
      };
    }
  },
};
