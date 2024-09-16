
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/PageNotFound';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './Components/Layout';
<<<<<<< HEAD
import UseStateDemo from './Components/UsestateDemo';
import UseStateEffectDemo from './Components/UstateEffectDemo';
=======
import React from 'react';
>>>>>>> a43a72b5b398867f5a59b541ec03bbbb1f308be8
function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Layout/>}>
    //   <Route index element={<Home/>}/>
    //   <Route path='/About' element={<About/>}/>
    //   <Route path='/Contact' element={<Contact/>}/>
    //   <Route path='/*' element={<NotFound/>}/>
    //   </Route>za
    // </Routes>
    // </BrowserRouter>
    // <UseStateDemo/>
    <UseStateEffectDemo/>
  );
}

export default App;
