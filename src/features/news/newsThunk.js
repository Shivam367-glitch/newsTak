import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getApiKey, rotateKey, totalKeys } from "../../utility/apiKeys";

export const fetchNews = createAsyncThunk(
  "news/fetch",
  async (
    { language },
    { getState, rejectWithValue }
  ) => {      
    const state = getState().news;
    const categoryData = state.newsByCategory[state.currentCategory];
    const requestedPage = (categoryData?.currentPage || 1);

      if (categoryData?.currentPage !=0 && requestedPage > categoryData.totalPages) {
        return rejectWithValue("No more pages");
      }

      if (categoryData && categoryData.pagesFetched[requestedPage]) {   
          return {
            category: state.currentCategory || "General",
            page: requestedPage,
            articles:categoryData?.pagesFetched[requestedPage] || [], 
            totalPages: categoryData.totalPages
          };
        }
  
      let attempt = 0;

      while (attempt < totalKeys) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/v2/trendings`,
            {
              params: {
                language,
                country:
                  language === "en" ||
                  language === "bn" ||
                  language === "hi"
                    ? "in"
                    : "",
                topic: state.currentCategory || "General",
                page: requestedPage,
              },
              headers: {
                "X-RapidAPI-Key": getApiKey(),
                "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
              },
            }
          );

          const totalPages = response.data.totalPages || 0;
          return {
            category: state.currentCategory || "General",
            page: requestedPage,
            articles: response.data.data || [],
            totalPages
          };
        } catch (err) {         
          if (err.response?.status === 429) {
            console.warn("⚠️ Rate limit hit, rotating API key...");
            rotateKey();
            attempt++;
          } else {
            return rejectWithValue(
              err.message || "Failed to fetch news"
            );
          }
        }
      }

    return rejectWithValue("All API keys exhausted due to rate limits");
  }
);
