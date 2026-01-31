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
    try {
      const { data, error } = await supabase.functions.invoke('search', {
        body: { query, options },
      });

      if (error) {
        console.error('Search function error:', error);
        return { success: false, error: error.message };
      }

      return data;
    } catch (error) {
      console.error('Search error:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'خطا در جستجو' 
      };
    }
  },
};
