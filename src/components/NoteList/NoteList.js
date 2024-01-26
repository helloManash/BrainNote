import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./style.module.css";
import { TextCard } from "components/TextCard/textCard";

export function NoteList(props) {
    const navigate = useNavigate();
  const noteList = useSelector((store) => store.noteSlice.noteList);

  return (
    <div className={`row justify-content-center`}>
      {noteList.map((note) => {
        return (
            <div key={note.id} className={s.card_container}>
          <TextCard
            title={note.title}
            content={note.content}
            subtitle={note.created_at}
            onClick={() =>navigate("/note/" + note.id)}
            onClickTrash = {() =>alert("onClickTrash")}
          />
          </div>
        );
      })}
    </div>
  );
}
