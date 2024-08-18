
export const findNotesInArchive = (archive,id)=>{
    return archive.some(note => note.id === id);
  }
  
export const findNotesInDeleted = (deleted,id)=>{
   return deleted.some(note=>note.id === id);
}  


