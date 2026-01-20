import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

import NavBar from './components/NavBar/NavBar';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';
import LetterForm from './components/LetterForm/LetterForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);
  const [letters,setLetters] = useState([]);

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }

  const addLetter = (newLetterData) => {
    newLetterData.mailboxId = Number(newLetterData.mailboxId);
    setLetters([...letters, newLetterData]);
  }

  return (
    <>
       <NavBar />
      <h1>Post Office</h1>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} /> 
        <Route 
          path="/new-mailbox" 
          element={<MailboxForm addBox={addBox} />}
        />        
        <Route
         path="/mailboxes/:mailboxId"
         element={<MailboxDetails mailboxes={mailboxes} />}
        />
        <Route 
        path="new-letter"
        element={<LetterForm mailboxes={mailboxes} addLetter={addLetter} />}
        />
        <Route path="*" element={<h2>Mailbox is empty!</h2>} />    
      </Routes>   
    </>
  );
};

export default App;
