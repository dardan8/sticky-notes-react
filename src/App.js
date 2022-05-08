import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search.js";
import Header from "./components/Header.js"

const App = () => {

  const [notes, setNotes] = useState([

]);

//State of Search
const [searchText, setSearchText] = useState('');

//State of Dark Mode
const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes));
}, [notes]
);



//Function that adds another Note to the state. Is passed to the other components.
const addNote = (text) => {
  const date = new Date();
  const newNote =  {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  };

const newNotes = [...notes, newNote];
setNotes(newNotes);

};

//Function that deletes notes

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes (newNotes);
}
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
    <div className="container">
      <Header handleDarkMode = {setDarkMode}/>
      <Search handleSearchNote={setSearchText} />
      <NotesList
      notes={notes.filter((note) => 
      note.text.toLowerCase().includes(searchText)
      )}
      handleAddNote={addNote}z
      handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  )
}

export default App;