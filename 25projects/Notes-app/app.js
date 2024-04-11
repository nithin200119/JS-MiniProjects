const inputBox = document.querySelector(".input");
const addBtn = document.querySelector(".addBtn");
const notesListWrapper = document.querySelector(".notes-list-wrapper");
const errorMsgText = document.querySelector(".error-message-text");

let currentEditedNote = null;
//creating or adding a note
function createNewNoteItem(getCurrentNote) {
  const li = document.createElement("li");
  const p = document.createElement("p");
  p.textContent = getCurrentNote;
  li.appendChild(p);
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  li.appendChild(editBtn);
  const deleBtn = document.createElement("button");
  deleBtn.textContent = "Delete";
  deleBtn.classList.add("dele-btn");
  li.appendChild(deleBtn);
  return li;
}

function saveNotesToStorage(getCurrentNote) {
  let notesList;
  if (localStorage.getItem("notes") === null) {
    notesList = [];
  } else {
    notesList = JSON.parse(localStorage.getItem("notes"));
  }
  notesList.push(getCurrentNote);
  localStorage.setItem("notes", JSON.stringify(notesList));
}
function addNewNote() {
  const extractInputText = inputBox.value.trim();
  if (extractInputText.length <= 0) {
    errorMsgText.textContent = "cannot be empty add a task";
    return false;
  }

  if (addBtn.textContent === "Edit Note") {
    handelEditNote(currentEditedNote.target.previousElementSibling.innerHTML);
    currentEditedNote.target.previousElementSibling.innerHTML =
      extractInputText;
    addBtn.textContent = "Add Note";
    inputBox.value = "";
    errorMsgText.textContent = "";
  } else {
    // to add a new note
    const newNoteItem = createNewNoteItem(extractInputText);
    notesListWrapper.appendChild(newNoteItem);
    inputBox.value = "";
    errorMsgText.textContent = "";

    saveNotesToStorage(extractInputText);
  }
}
function handelEditNote(currentNote) {
  let notes = JSON.parse(localStorage.getItem("notes"));
  let index = notes.indexOf(currentNote);

  notes[index] = inputBox.value;
  localStorage.setItem("notes", JSON.stringify(notes));
}

function fetchAllNotes() {
  let notesList;
  if (localStorage.getItem("notes") === null) {
    notesList = [];
  } else {
    notesList = JSON.parse(localStorage.getItem("notes"));
    notesList.forEach((note) => {
      const extractLi = createNewNoteItem(note);
      notesListWrapper.appendChild(extractLi);
    });
  }
}
function handelDeleteNotes(currentNotes) {
  let notesList;
  if (localStorage.getItem("notes") === null) {
    notesList = [];
  } else {
    notesList = JSON.parse(localStorage.getItem("notes"));
  }
  console.log(currentNotes.children[0].innerHTML);

  let currentNoteText = currentNotes.children[0].innerHTML;
  let index = notesList.indexOf(currentNoteText);

  notesList.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesList));
}
function handelEditOrDeleteNote(e) {
  // console.log(e.target.previousElementSibling);
  // console.log(e.target.innerHTML)

  if (e.target.innerHTML === "Delete") {
    notesListWrapper.removeChild(e.target.parentElement);
    handelDeleteNotes(e.target.parentElement);
  }

  if (e.target.innerHTML === "Edit") {
    inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus();
    addBtn.textContent = "Edit Note";
    currentEditedNote = e;
    console.log(currentEditedNote);
  }
}
notesListWrapper.addEventListener("click", handelEditOrDeleteNote);
document.addEventListener("DOMContentLoaded", fetchAllNotes);
addBtn.addEventListener("click", addNewNote);
