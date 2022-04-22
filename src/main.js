import NotesAPI from "./NotesAPI.js";

NotesAPI.saveNote({
  title: "new note!",
  body: "im new note text",
});

console.log(NotesAPI.getAllNotes());
