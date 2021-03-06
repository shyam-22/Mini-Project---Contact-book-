import React from "react"
import Contacts from "./COMPONENTS/Contacts/Contacts"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from "./COMPONENTS/NAVIGATION/Navbar"
import "./Style_Folder/App.scss"

import AddContact from "./COMPONENTS/Contacts/AddContact"
import EditContact from "./COMPONENTS/Contacts/EditContact"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="py-3">
          <Switch>
            <Route exact path="/" component={Contacts}/> 
            <Route path="/addContact" component={AddContact}/> 
            <Route path="/editContact/:id" component={EditContact}/> 


          </Switch>
           
        </div>
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

//className ="py-3" //top and padding me padding dalega}