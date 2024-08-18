import { useNotes } from "../Context/notes-context.jsx";
import { findNotesInArchive, findNotesInDeleted } from "../utils/findNotesInArchive.jsx";


export default function NotesCard({ id, title, text,isPinned}) {

const {notesDispatch,archive,deleted,important } = useNotes();

const isNotesInArchive = findNotesInArchive(archive,id);
   
const isNotesInBin = findNotesInDeleted(deleted,id);


  const onPinClick = (id) =>{
     !isPinned ? notesDispatch({
             type: 'PIN',
             payload: {id}
        }): notesDispatch({
            type: 'UNPIN',
            payload: {id}
        })
  }

 const onArchiveClick = (id) =>{
  !isNotesInArchive ? 
      notesDispatch({
        type: 'ADD_TO_ARCHIVE',
        payload: { id }
      }) : notesDispatch({
         type: 'REMOVE_FROM_ARCHIVE',
         payload: {id}
      })
 }

 const onDeleteClick = (id) =>{
        !isNotesInBin ?
        notesDispatch({
          type:'DELETED',
          payload: {id},
        }): notesDispatch({
          type: 'PERMANENT_DELETED',
          payload: {id}
        })
 }



  return (
    <div className="w-56 border border-neutral-800 p-2 rounded-md w-[300px]" key={id}>
      <div className="flex justify-between border-b-2">
        <p>{title}</p>
        {
           !isNotesInArchive && !isNotesInBin?  <button onClick={()=>onPinClick(id)}>
           <span className={isPinned? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
         </button> : <></> 
        }
       
      </div>
      <div className="flex flex-col">
        <p>{text}</p>
        <div className="ml-auto">
          {
             !isNotesInBin ? <button onClick={()=> onArchiveClick(id)}>
             <span className={isNotesInArchive?'material-icons' :'material-icons-outlined'}>archive</span>
           </button> : <></>
          }
           {
             !isNotesInArchive?  <button onClick={()=> onDeleteClick(id)}>
             <span className="material-icons-outlined">delete_outline</span>
           </button> : <></>
           }
          
         
            </div>
      </div>
    </div>
  );
}
