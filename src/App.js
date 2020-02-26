import React from 'react';
import Navbar from './Components/Navbar'


function App() {
  const x =[
    {titel: 'Home'},
    {titel :'Services', submenu:['For entrepreneurs','For students','For hobbyists'], couleur:'new-list'},
    {titel: 'Cantact'}


];
  

  return (
    <div className="App">
      <Navbar list={x}/>
    </div>
  );
}

export default App;
