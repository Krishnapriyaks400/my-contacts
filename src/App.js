
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Favourite from "./pages/Favourite";

import Nav from "./components/Nav";
import {  useState } from "react";
function App() {
  const [contacts, setContacts] = useState([]);

  const formSub =  (data) => {
    setContacts([...contacts, data]);  
  }

    const deleteContact = (id) => {
      let newContact = contacts.filter((singleContact) => {
      return singleContact.id !== id;
    });
 setContacts(newContact);
  };

  const favToggle =  (id) => {
    let updatedContact = contacts.map((singleContact) => {
      return singleContact.id === id
        ? { ...singleContact, fav: !singleContact.fav }
        : singleContact;
    });
    setContacts(updatedContact);
  
  };
  return (
    <BrowserRouter>
    <Nav/>

    <Routes>
    
    <Route exact path ="/" element={<Home
     formSub={formSub} 
    contacts={contacts}
    favToggle={favToggle}
    deleteContact={deleteContact} />}> </Route>

      <Route path="/favourite" element={<Favourite
       contacts={contacts}
       favToggle={favToggle}
       deleteContact={deleteContact}/>}></Route>
      
      </Routes>
  </BrowserRouter>
  );
}

export default App;
