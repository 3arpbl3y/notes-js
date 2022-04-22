export default class NotesAPI {
  //для записи заметок в локальное хранилище
  static getAllNotes() {}
  //методы класса, для получения всех заметок, сохранения и удаления

  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();

    notes.push(noteToSave);
    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }
  static deleteNote(id) {}
}
