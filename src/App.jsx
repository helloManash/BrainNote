import { Header } from "components/Header/Header";
import { Outlet, useNavigate } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";
import { useDispatch } from "react-redux";
import { NoteAPI } from "api/note-api";
import { useEffect } from "react";

import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";

import s from "./style.module.css";
import { withAuthRequired } from "hoc/withAuthRequired";


export function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function fetchAllNotes(){
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() =>{
    fetchAllNotes();
  },[]);
  return <div>
    <Header/>
    <ButtonPrimary className={s.buttonAdd} onClick={() => navigate("/note/new")}>
          +
        </ButtonPrimary>
    <div className={s.workspace}>

    <Outlet/>
    </div>
  </div>;
}


export const ProtectedApp = withAuthRequired(App);