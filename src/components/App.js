import React, {useState} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

// Functional component
function App() {
  // Use state React Hook.
  const[contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    console.log(contact);
  }
  return(
    <div className="ui container">
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      {/* passing props */}
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
  