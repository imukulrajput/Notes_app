import { Fragment } from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import { useNotes } from "../Context/notes-context.jsx";
import NotesCard from "../components/NotesCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Bin(){

    const { deleted } = useNotes();

    return (
        <Fragment>
            <Navbar></Navbar>
            <main className="flex gap-3">
               <Sidebar/>
               <div>
        <div className="flex flex-wrap gap-6 w-screen mt-7">
          {deleted?.length > 0 &&
            deleted.map(({ id, title, text, isPinned }) => (
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
        <Footer></Footer>
            </main>
        </Fragment>
    );
}