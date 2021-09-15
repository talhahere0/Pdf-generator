import React from 'react';
import Pdfgenerator from './Pdfgenerator'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Workdetail from './pages/Workdetail'
import Project from './pages/Project';
import ExtraDetail from './pages/ExtraDetail';


function App() {

  return (
    <>
    <Router>
    
    <Switch>
      <Route path='/' exact component={Pdfgenerator}/>
      <Route path='/workdetail' component={Workdetail} />
      <Route path='/project' component={Project} />
      <Route path='/extradetail' component={ExtraDetail}/> 
    </Switch>
   
    
    </Router>
    </>
    
  );
}

export default App;
