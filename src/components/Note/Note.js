import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteNote, updateNote } from "store/notes/notes-slice";

export function Note() {
  const { noteId } = useParams();
  const navigate = useNavigate();
const dispatch = useDispatch();
  const note = useSelector((store) =>
    store.noteSlice.noteList.find((note) => note.id === noteId)
  );

  
  const submit = async (formValues) =>{
    console.log(note.id);
   const updatedNote = await NoteAPI.updateById(note.id, formValues);

   console.log(updateNote);
   dispatch(updateNote(updatedNote));
   setIsEditable(false); 
  }

  const deleteNote_ = async () =>{
    if(window.confirm("Delete note? ")){

        NoteAPI.deleteById(note.id);
        dispatch(deleteNote(note));
        navigate("/");
    }
    // console.log("Hi")
  }

//   console.log("***", note);


const [isEditable, setIsEditable] = useState(false);
  return (
    <div>
      {note && (
        <NoteForm
        isEditable = {isEditable}
        note = {note}
          title={isEditable ? "Edit Note": note.title}
          onClickDelete={deleteNote_}
          onClickEdit={() => setIsEditable(!isEditable)}
          onSubmit={isEditable && submit}
        />
      )}
    </div>
  );
}

export const ProtectedNote = withAuthRequired(Note);
