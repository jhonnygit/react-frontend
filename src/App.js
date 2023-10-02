import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
        
              <HeaderComponent />
                <div className="container">
                        {/* <Routes>
                          <Route path = "/" exact component = {<ListEmployeeComponent/>}></Route>
                          <Route path = "/employees" component = {<ListEmployeeComponent/>}></Route>
                          <Route path = "/add-employee/:id" component = {<CreateEmployeeComponent/>}></Route>
                          <Route path = "/view-employee/:id" component = {<ViewEmployeeComponent/>}></Route>
                          <Route path = "/update-employee/:id" component = {<UpdateEmployeeComponent/>}></Route>
                        </Routes> */}
                    
                </div>
              <FooterComponent />
        
    </div>
  );
}

export default App;
