import { NoteList } from "components/NoteList/NoteList";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


export function NoteBrowse() {
    const notelist = useSelector((store) => store.noteSlice.noteList);
    return <>
    {notelist?.length === 0 && (
        <div className="d-flex justify-content-center">
            <span>

            You don't have any note, do you want to{" "}
            <Link to="/note/new">create one</Link>
            </span>
        </div>
    )}
    <NoteList/>
    </>
}

export const ProtectedNoteBrowse = withAuthRequired(NoteBrowse);