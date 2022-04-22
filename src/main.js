import NotesAPI from "./_NotesAPI.js";

NotesAPI.saveNote({
  title: "new note!",
  body: "im new note text",
});

console.log(NotesAPI.getAllNotes());
