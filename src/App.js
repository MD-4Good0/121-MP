import React from 'react';

import {Routes, Route} from "react-router-dom";

import PageHome from './PageHome';
import PageToDo from './PageToDo';
import PageMusic from './PageMusic';
import PageHobbies from './PageHobbies';

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageHome/>}/>
      <Route path="/home" element={<PageHome/>}/>
      <Route path="/todo" element={<PageToDo/>}/>
      <Route path="/music" element={<PageMusic/>}/>
      <Route path="/hobbies" element={<PageHobbies/>}/>
    </Routes>
  );
}

export default App;