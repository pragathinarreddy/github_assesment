import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Aside from './components/Aside';
import Articles from './components/Articles';
import People from './components/People';
import Books from './components/Books';
import HelpAndSupport from './components/HelpAndSupport';
import Main from './components/Main';
import AnswerComp from './components/AnswerComp';

function App() {
  return (
    <div>
      <Header/>
      <div className='container flex'>
        <Aside/>
       
      <Routes>
          <Route path='/' element = {<Main/>}/>
          <Route path='/articles' element = {<Articles/>}/>
          <Route path='/people' element = {<People/>}/>
          <Route path='/books' element = {<Books/>}/>
          <Route path='/helpandsupport' element = {<HelpAndSupport/>}/>
          <Route path='/articles/:slug' element = {<AnswerComp />} /> 
        </Routes>
      </div>


    </div>
   
  );
}

export default App;
