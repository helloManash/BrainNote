import "./index.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store , persistor} from "./store";
import { ProtectedApp } from "App";
import { PersistGate } from "redux-persist/integration/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NoteBrowse } from "components/NoteBrowse/NoteBrowse";
import { Note } from "components/Note/Note";
import { NoteCreate } from "components/NoteCreate/NoteCreate";
import { PageNotFound } from "components/PageNotFound/PageNotFound";
import { SignIn } from "components/signin/signin";
import { Signup } from "components/signup/signup";
import { FirebaseApp } from "services/firebase";


FirebaseApp.init();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  
    <Provider store={store}>
      <PersistGate persistor={persistor}>

      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<ProtectedApp/>}>
            <Route path="/" element={<NoteBrowse />} />
            <Route path="/note/:noteId" element={<Note />} />
            <Route path="/note/new" element={<NoteCreate />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </PersistGate>
    </Provider>
  
);
