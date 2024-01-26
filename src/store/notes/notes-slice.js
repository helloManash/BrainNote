import { createSlice } from "@reduxjs/toolkit"; 

export const noteSlice = createSlice({
    name: "noteSlice",
    initialState:{
        noteList:[],
    },
    reducers:{
        setNoteList: (currentSlice,action) =>{
            currentSlice.noteList = action.payload;
        },
        addNote: (state, action) => {
            state.noteList.push(action.payload);
          },
        updateNote: (state, action) =>{
            const indextoUpdate = state.noteList.findIndex(note=>note.id === action.payload.id);
            state.noteList[indextoUpdate] = action.payload;
        }, 
        deleteNote: (state, action) =>{
           const filteredNoteList =  state.noteList.filter(note => note.id !== action.payload.id);
           state.noteList = filteredNoteList;
        }
    }
});



export const noteReducer = noteSlice.reducer;

export const {setNoteList, addNote, updateNote, deleteNote} = noteSlice.actions;