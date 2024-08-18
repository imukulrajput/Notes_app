import { createContext,useContext ,useReducer } from "react";

import { NotesReducers } from "../reducers/NotesReducers.jsx";

const NotesContext = createContext();

const NotesProvider = ({children}) =>{

    const initialState = {
        title:'',
        text: '',
        notes:[],
        pinnedNotes:[],
        unpinnedNotes:[],
        archive:[],
        deleted:[],
       
         
  }
  
  const [{title,text,notes,archive,deleted},notesDispatch] = useReducer(NotesReducers,initialState);

     return (
        <NotesContext.Provider value={{title,text,notes,archive,deleted,notesDispatch}}>
              {children}
        </NotesContext.Provider>
     )
}

const useNotes = () => useContext(NotesContext);

export {NotesProvider,useNotes}
