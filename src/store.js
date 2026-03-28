import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/authSlice'
import postsReducer from './features/posts/postsSlice'
import { postsApi } from './services/postsApi'

const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})

export default store