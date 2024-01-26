import { NoteAPI } from "api/note-api";
import { NoteForm } from "components/NoteForm/NoteForm";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNote } from "store/notes/notes-slice";


export function NoteCreate() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submit = async (formValues) => {
        
        alert(JSON.stringify(formValues));
        const createdNote = await NoteAPI.create({...formValues, created_at: new Date().toLocaleDateString()});

        dispatch(addNote(createdNote));
        navigate("/");

    }
    return <div><NoteForm title="New note" onSubmit={submit}/></div>
}


export const ProtectedNoteCreate = withAuthRequired(NoteCreate);