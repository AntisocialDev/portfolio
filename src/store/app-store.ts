import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../reducers/sidebar-slice';
import themeReducer from '@/reducers/theme.reducer';


export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        theme: themeReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;