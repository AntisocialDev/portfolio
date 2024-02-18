import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: ''
    },

    reducers: {
        toggleTheme(state, payload){
            state.theme = payload.payload;
            localStorage.setItem('theme', payload.payload);
            document
              .querySelector("body")
              ?.setAttribute("color-scheme", localStorage.getItem('theme') as string);
        }
    }
});

export const {toggleTheme} = themeSlice.actions;

export default themeSlice.reducer;