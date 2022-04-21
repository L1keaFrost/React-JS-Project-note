import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';
import Error from './components/Error';

function App() {
  return (
    <div className="main">
     <Router>
       <Header></Header>
       <div className='container'>
       <Routes>
         <Route exact='true' path='/' element={<Main/>}></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/create' element={<Create/>}></Route>
         <Route exact='true' path='/note/' element={<Note/>}></Route>
         <Route exact='true' path='/note/:noteURL' element={<Note/>}></Route>
         <Route element={<Error/>}></Route>
       </Routes>
       </div>
     </Router>
     <Footer></Footer>
    </div>
  );
}

export default App;
