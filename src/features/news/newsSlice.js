import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./newsThunk";

const initialState = {
  currentCategory: "General",
  newsByCategory: {},
  status: "idle",
  error: null,
};

const newsSlice = createSlice({
  name: "news",
  initialState,

  reducers: {
    setCategory(state, action) { 
      const category = action.payload;
      state.currentCategory = category;     
    },  
    setPage(state,action){
       state.newsByCategory[state.currentCategory] = {
         ...state.newsByCategory[state.currentCategory],
          currentPage: action.payload
        };
    },
    emptyState(state) { 
       state.newsByCategory = {};
      }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "loading";
        state.error = null;  
      if (!state.newsByCategory[state.currentCategory]) { 
          state.newsByCategory[state.currentCategory] = {
          currentPage: 0, 
          currentArticleToView: [], 
          totalPages: 0,
          pagesFetched: {},
          };
      }
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        const { category, page, articles, totalPages} = action.payload;    
       
        const categoryState = state.newsByCategory[category];
        categoryState.currentPage = page;
        categoryState.totalPages = totalPages; 
        categoryState.currentArticleToView = articles;
        categoryState.pagesFetched[page] = articles;
        state.status = "succeeded";
      })
      .addCase(fetchNews.rejected, (state, action) => {     
        if ( action.payload === "No more pages" || action.payload === "All API keys exhausted due to rate limits") {
          state.error = action.payload; 
          state.status = "idle";
          return;
        }
        state.status = "failed";
        state.error = action.payload || action.error.message;
      });
  },
});

export const { setCategory, emptyState ,setPage} = newsSlice.actions;
export default newsSlice.reducer;
