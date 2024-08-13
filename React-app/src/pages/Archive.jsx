import { Fragment } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useNotes } from "../Context/notes-context.jsx";
import NotesCard from "../components/NotesCard.jsx";

export default function Archive() {
  const { archive } = useNotes();

  return (
    <Fragment>
      <Navbar></Navbar>
      <main className="flex gap-3">
        <Sidebar />
            <div>
        <div className="flex flex-wrap gap-6 w-screen mt-7">
          {archive?.length > 0 &&
            archive.map(({ id, title, text, isPinned }) => (
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
              ></NotesCard>
            ))}
        </div>
        </div>
      </main>
    </Fragment>
  );
}
