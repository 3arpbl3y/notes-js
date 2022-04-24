export default class NotesAPI {
  //для записи заметок в локальное хранилище
  static getAllNotes() {
    //методы класса, для получения всех заметок, сохранения и удаления
    //расшифровываем все заметки полученные из локалсторэдж с помощью
    // гетИтем и расшифрованные из ЖСОН
    const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]");
    //сортируем полученные данные по дате, чем раньше,
    // тем лучше с условием через тернарный оператор
    return notes.sort((a, b) => {
      return new Date(a.updated) > new Date(b.updated) //условие
        ? -1 // если
        : 1; //иначе
    });
  }
  static saveNote(noteToSave) {
    const notes = NotesAPI.getAllNotes();
    /* проверяем существует ли заметка по ID и если нет, то выполняем 
	функция обнолвния
заметки в теле заметки и названии, иначе создаём заметку с новым ИД и боди */
    const existing = notes.find((note) => note.id == noteToSave);

    if (existing) {
      existing.title = noteToSave.title;
      existing.body = noteToSave.body;
      //а время просто записываем новое, получая его через Дейт
      existing.updated = new Date().toISOString();
    } else {
      //присваеваем заметке случайный айди с помощью мат рандом
      // и округления в нижнюю сторону
      noteToSave.id = Math.floor(Math.random() * 1000000);
      //получаем текущую дату и время. toISOstring возвращает это в формате ИСО.
      noteToSave.updated = new Date().toISOString();
      //видимо записываем в массив всё, что получим
      notes.push(noteToSave);
    }

    //обращаемся к ноутс апп и
    // сохраняем текст заметки в роли ЖСОНа, которую получили.
    localStorage.setItem("notesapp-notes", JSON.stringify(notes));
  }
  static deleteNote(id) {
    const notes = NotesAPI.getAllNotes();
    //получаем константу notes и через фильтр ищем в свойствах notes
    // сравниваем значения свойтства note.id с уже существующим ИД
    const newNotes = notes.filter((note) => note.id != id);

    localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
  }
}
